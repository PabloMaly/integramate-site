// Cloudflare Pages middleware: sends first-time visitors of "/" to the Spanish
// site when Cloudflare geolocates them in a Spanish-speaking country, and shows
// prices in ARS to visitors in Argentina.
const SPANISH_COUNTRIES = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GQ', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE',
]);

function readCookie(header: string | null, name: string): string | undefined {
  return header
    ?.split(';')
    .map((part) => part.trim().split('='))
    .find(([key]) => key === name)?.[1];
}

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const country = context.request.headers.get('CF-IPCountry');

  if (url.pathname === '/') {
    const saved = readCookie(context.request.headers.get('Cookie'), 'lang');
    if (saved === 'es' || (saved !== 'en' && country !== null && SPANISH_COUNTRIES.has(country))) return redirectTo(url, '/es/');
  } else if (url.pathname !== '/es/') {
    return context.next();
  }

  const response = await context.next();
  // Both prices are in the HTML and the CSS shows one; USD is the default, so previews and crawlers see it.
  if (country !== 'AR') return response;
  return new HTMLRewriter()
    .on('html', {
      element(html) {
        html.setAttribute('data-currency', 'ars');
      },
    })
    .transform(response);
};

function redirectTo(url: URL, path: string): Response {
  return new Response(null, {
    status: 302,
    headers: { Location: new URL(path, url).toString(), 'Cache-Control': 'private, no-store', Vary: 'Cookie' },
  });
}
