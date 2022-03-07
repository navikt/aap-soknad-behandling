const APP_URL = process.env.APP_URL || 'localhost:3000'
const VEDTAK_API_URL = process.env.VEDTAK_API_URL || 'localhost:5000'
const SOKNAD_API_AUDIENCE = process.env.SOKNAD_API_AUDIENCE || 'localhost:aap-soknad-api'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  BASE_PATH: '/aap-behandling',
  APP_URL,
  VEDTAK_API_URL,
  SOKNAD_API_AUDIENCE
};
