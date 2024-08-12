import { getAppConfig } from './app';
import { getProviderConfig } from './provider';
import { getAnalyticsConfig } from './analytics';

export const getServerConfig = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server Config] you are importing a server-only module outside of server');
  }

  const provider = getProviderConfig();
  const app = getAppConfig();
  const analytics = getAnalyticsConfig();

  return { ...provider, ...app, ...analytics };
};
