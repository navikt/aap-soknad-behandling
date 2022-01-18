import { Client, errors, GrantBody, Issuer, TokenSet } from "openid-client";
import { RequestError } from "got";
import {LogInfo} from "../logger";
const OPError = errors.OPError;

let _issuer: Issuer<Client>;
let _client: Client;

async function issuer() {
  if (typeof _issuer === "undefined") {
    if (!process.env.AZURE_APP_WELL_KNOWN_URL)
      throw new TypeError(
        `Miljøvariabelen "AZURE_APP_WELL_KNOWN_URL må være satt`
      );
    _issuer = await Issuer.discover(process.env.AZURE_APP_WELL_KNOWN_URL);
  }
  return _issuer;
}

function jwk() {
  if (!process.env.AZURE_APP_JWK)
    throw new TypeError(`Miljøvariabelen "AZURE_APP_JWK må være satt`);
  return JSON.parse(process.env.AZURE_APP_JWK);
}

async function client() {
  if (typeof _client === "undefined") {
    if (!process.env.AZURE_APP_CLIENT_ID)
      throw new TypeError(`Miljøvariabelen AZURE_APP_CLIENT_ID må være satt`);
    if (!process.env.AZURE_APP_CLIENT_SECRET)
      throw new TypeError(`Miljøvariabelen AZURE_APP_CLIENT_SECRET må være satt`);

    const _jwk = jwk();
    const _issuer = await issuer();
    _client = new _issuer.Client(
      {
        client_id: process.env.AZURE_APP_CLIENT_ID,
        client_secret: process.env.AZURE_APP_CLIENT_SECRET,
        token_endpoint_auth_method: 'client_secret_post',
      },
        { keys: [_jwk] }
    );
  }
  return _client;
}

export async function getOnBehalfOfToken(subject_token: string) {
  const _client = await client();
  console.log('client', _client);
  if (!process.env.API_SCOPE)
    throw new TypeError(`Miljøvariabelen API_SCOPE må være satt`);

  const grantBody: GrantBody = {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: subject_token,
    requested_token_use: 'on_behalf_of',
    scope: process.env.API_SCOPE,
  };

  return _client
    .grant(grantBody)
    .then((tokenSet: TokenSet) => {
      console.log('tokenSet', tokenSet);
      return tokenSet.access_token;
    })
    .catch((err) => {
      switch (err.constructor) {
      case RequestError:
        console.error("Kunne ikke koble til Azure", err);
        break;
      case OPError:
        console.error(
          `Noe gikk galt med On-Behalf-Of token mot Azure.
            Feilmelding fra openid-client: (${err}).
            HTTP Status fra Azure: (${err.response.statusCode} ${err.response.statusMessage})
            Body fra Azure:`,
          err.response.body
        );
        break;
      }
      throw err;
    });
}
