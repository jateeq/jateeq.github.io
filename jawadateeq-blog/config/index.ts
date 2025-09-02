import type {Config} from '@docusaurus/types';
import {baseConfig} from './config.base';
import {devConfig} from './config.dev';
import {prodConfig} from './config.prod';
import {customDomainConfig} from './config.custom-domain';

/**
 * Deep merge function to combine configuration objects
 */
function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = {...target};
  
  for (const key in source) {
    if (source[key] !== undefined) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
        result[key] = deepMerge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key] as T[Extract<keyof T, string>];
      }
    }
  }
  
  return result;
}

/**
 * Get configuration based on environment
 */
export function getConfig(): Config {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';
  
  let envConfig;
  let configType;
  
  if (isDevelopment) {
    envConfig = devConfig;
    configType = 'development';
  } else if (useCustomDomain) {
    envConfig = customDomainConfig;
    configType = 'custom domain (jawadateeq.com)';
  } else {
    envConfig = prodConfig;
    configType = 'production (GitHub Pages)';
  }
  
  console.log(`🔧 Loading ${configType} configuration`);
  
  return deepMerge(baseConfig, envConfig);
}
