import { environment } from '@environments/environment';

const GOOGLE_AUTH_URL = environment.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + environment.OAUTH2_REDIRECT_URI;

const FACEBOOK_AUTH_URL = environment.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + environment.OAUTH2_REDIRECT_URI;

const GITHUB_AUTH_URL = environment.API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + environment.OAUTH2_REDIRECT_URI;

export { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL }