const APP_URL = process.env.APP_URL || 'localhost:3000'
const VEDTAK_API_URL = process.env.VEDTAK_API_URL || 'localhost:5000'
const VEDTAK_API_AUDIENCE = process.env.VEDTAK_API_AUDIENCE || 'localhost:vedtak'
const VEDTAK_API_SCOPE = process.env.VEDTAK_API_SCOPE || 'api://localhost.vedtak/.default'
const OPPGAVESTYRING_API_URL = process.env.OPPGAVESTYRING_API_URL || 'localhost:5000'
const OPPGAVESTYRING_API_AUDIENCE = process.env.OPPGAVESTYRING_API_AUDIENCE || 'localhost:oppgavestyring'
const OPPGAVESTYRING_API_SCOPE = process.env.OPPGAVESTYRING_API_SCOPE || 'api://localhost.oppgavestyring/.default'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  BASE_PATH: '/aap-behandling',
  APP_URL,
  VEDTAK_API_URL,
  VEDTAK_API_AUDIENCE,
  VEDTAK_API_SCOPE,
  OPPGAVESTYRING_API_URL,
  OPPGAVESTYRING_API_AUDIENCE,
  OPPGAVESTYRING_API_SCOPE
};
