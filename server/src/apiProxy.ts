import { Application, Request} from "express";
import proxy from 'express-http-proxy';
import {LogError} from "./logger";
import config from "./config";
import {getOnBehalfOfToken} from "./auth/azureOnBehalfOfToken";

const options = () => ({
  parseReqBody: true,
  proxyReqOptDecorator: (options: any, req: Request) => {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    return new Promise((resolve, reject) => {
      return getOnBehalfOfToken(token).then(
          apiToken => {
            resolve({
              ...options,
              headers: {
                ...options.headers,
                Authorization: `Bearer ${apiToken}`
              }
            })
          },
          error => {
            LogError('Azure OBO token error: ', error)
            reject(error)
          })
    });
  },
  proxyReqPathResolver: (req: Request) => {
    return (req.originalUrl.startsWith('/aap-behandling/api'))
        ? req.originalUrl.slice(15)
        : req.originalUrl;
  },
  // Mutate request body
  // proxyReqBodyDecorator: function(bodyContent, srcReq) {}
});



export const tokenXProxy = (path: string, server: Application) => {
  server.use(path, proxy(config.SOKNAD_API_URL, options()));
}