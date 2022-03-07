const APP_URL = process.env.APP_URL || 'localhost:3000'
const VEDTAK_API_URL = process.env.VEDTAK_API_URL || 'localhost:5000'
const VEDTAK_API_AUDIENCE = process.env.VEDTAK_API_AUDIENCE || 'localhost:vedtak'
const VEDTAK_API_SCOPE = process.env.VEDTAK_API_SCOPE || 'api://localhost.vedtak/.default'
const OPPGAVEBEHANDLING_API_URL = process.env.OPPGAVEBEHANDLING_API_URL || 'localhost:5000'
const OPPGAVEBEHANDLING_API_AUDIENCE = process.env.OPPGAVEBEHANDLING_API_AUDIENCE || 'localhost:oppgavebehandling'
const OPPGAVEBEHANDLING_API_SCOPE = process.env.OPPGAVEBEHANDLING_API_SCOPE || 'api://localhost.oppgavebehandling/.default'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  BASE_PATH: '/aap-behandling',
  APP_URL,
  VEDTAK_API_URL,
  VEDTAK_API_AUDIENCE,
  VEDTAK_API_SCOPE,
  OPPGAVEBEHANDLING_API_URL,
  OPPGAVEBEHANDLING_API_AUDIENCE,
  OPPGAVEBEHANDLING_API_SCOPE
};
