import { Application, Request} from "express";
import proxy from 'express-http-proxy';
import {LogError} from "./logger";
import config from "./config";
import {getOnBehalfOfToken} from "./auth/azureOnBehalfOfToken";
import { IncomingMessage } from "http";

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
  userResDecorator: function(proxyRes: IncomingMessage, proxyResData: any) {
  if (proxyRes.statusCode > 299) {
    let resData = {};
    try {
      resData = JSON.parse(proxyResData.toString('utf8'));
      // eslint-disable-next-line no-empty -- tatt fra soknad, vurder om det skal gjøres sånn
    } catch {}
    LogError('proxyError', {
      statusCode: proxyRes.statusCode,
      statusMessage: proxyRes?.statusMessage,
      data: resData
    })
  }
  return proxyResData;
}
  // Mutate request body
  // proxyReqBodyDecorator: function(bodyContent, srcReq) {}
});



export const tokenXProxy = (path: string, server: Application) => {
  server.use(path, proxy(config.SOKNAD_API_URL, options()));
}
