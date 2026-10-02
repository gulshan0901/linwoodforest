import redirects from '../src/config/redirects.json' with { type: 'json' };

const baseUrl =
  process.env.REDIRECT_AUDIT_BASE_URL || process.env.BASE_URL || 'http://localhost:3000';
const verifyDestinations = process.env.VERIFY_REDIRECT_DESTINATIONS === 'true';
const failures = [];

function expandSource(source) {
  if (source.includes(':path*')) {
    return source.replace(':path*', 'sample-page/');
  }

  return source;
}

function expandDestination(destination) {
  if (destination.includes(':path*')) {
    return destination.replace(':path*', 'sample-page/');
  }

  return destination;
}

function normalizeComparablePath(pathname) {
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

for (const redirect of redirects) {
  const sourcePath = expandSource(redirect.source);
  const expectedDestinationPath = expandDestination(redirect.destination);
  const response = await fetch(new URL(sourcePath, baseUrl), { redirect: 'manual' });
  const statusOk = redirect.permanent
    ? response.status === 301 || response.status === 308
    : response.status === 302 || response.status === 307;
  const location = response.headers.get('location');

  if (!statusOk) {
    failures.push(`${sourcePath} returned ${response.status}, expected permanent redirect.`);
    continue;
  }

  if (!location) {
    failures.push(`${sourcePath} did not return a Location header.`);
    continue;
  }

  const actualDestination = new URL(location, baseUrl);
  const expectedDestination = new URL(expectedDestinationPath, baseUrl);

  if (
    normalizeComparablePath(actualDestination.pathname) !==
    normalizeComparablePath(expectedDestination.pathname)
  ) {
    failures.push(
      `${sourcePath} redirected to ${actualDestination.pathname}, expected ${expectedDestination.pathname}.`,
    );
    continue;
  }

  if (verifyDestinations) {
    const destinationResponse = await fetch(actualDestination, { redirect: 'manual' });
    if (destinationResponse.status >= 400) {
      failures.push(`${actualDestination.pathname} returned ${destinationResponse.status}.`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(
  `Redirect audit passed for ${redirects.length} mapping(s). Destination verification: ${verifyDestinations}.`,
);
