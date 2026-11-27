import pkg from '../../package.json';

export const APP_VERSION = `v${pkg.version}`;

/** Formats a semver string with an optional staging/preview suffix from the Vercel branch. */
export function formatAppVersion(version: string, gitBranch?: string): string {
  const base = version.startsWith('v') ? version : `v${version}`;
  if (!gitBranch || gitBranch === 'master' || gitBranch === 'main') return base;
  if (gitBranch === 'dev') return `${base} (dev)`;
  return `${base} (preview)`;
}

export const APP_VERSION_LABEL = formatAppVersion(
  pkg.version,
  process.env.VERCEL_GIT_COMMIT_REF
);
