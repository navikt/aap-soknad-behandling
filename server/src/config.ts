const APP_URL = process.env.APP_URL || 'localhost:3000'
const OPPGAVESTYRING_API_URL = process.env.OPPGAVESTYRING_API_URL || 'localhost:5000'
const OPPGAVESTYRING_API_AUDIENCE = process.env.OPPGAVESTYRING_API_AUDIENCE || 'localhost:oppgavestyring'
const OPPGAVESTYRING_API_SCOPE = process.env.OPPGAVESTYRING_API_SCOPE || 'api://localhost.oppgavestyring/.default'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  BASE_PATH: '/aap-behandling',
  APP_URL,
  OPPGAVESTYRING_API_URL,
  OPPGAVESTYRING_API_AUDIENCE,
  OPPGAVESTYRING_API_SCOPE
};
