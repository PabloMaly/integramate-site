// Cloudflare Pages middleware: sends first-time visitors of "/" to the Spanish
// site when Cloudflare geolocates them in a Spanish-speaking country.
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
  if (url.pathname !== '/') return context.next();

  const saved = readCookie(context.request.headers.get('Cookie'), 'lang');
  if (saved === 'en' || saved === 'es') {
    return saved === 'es' ? redirectTo(url, '/es/') : context.next();
  }

  const country = context.request.headers.get('CF-IPCountry');
  return country && SPANISH_COUNTRIES.has(country) ? redirectTo(url, '/es/') : context.next();
};

function redirectTo(url: URL, path: string): Response {
  return new Response(null, {
    status: 302,
    headers: { Location: new URL(path, url).toString(), 'Cache-Control': 'private, no-store', Vary: 'Cookie' },
  });
}
