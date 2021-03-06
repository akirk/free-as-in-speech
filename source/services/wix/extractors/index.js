import { settings as communitiesBlogAppSettings } from './communities-blog-app';
import { settings as siteMetaSettings } from './site-meta-app';
import { settings as mediaManagerSettings } from './media-manager';

/**
 * An array of the defined extractors.
 */
export const extractors = [
	siteMetaSettings,
	communitiesBlogAppSettings,
	mediaManagerSettings,
];
