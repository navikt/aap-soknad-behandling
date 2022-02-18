import {NextFunction, Request, Response} from "express";
import {validerToken} from "./azuread";
import {LogError} from "../logger";

export const enforceAzureADMiddleware = async function(req: Request, res: Response, next: NextFunction) {
  const loginPath = `/oauth2/login?redirect=${req.originalUrl}/`;
  const {authorization} = req.headers;

  // Not logged in - log in with wonderwall
  if (!authorization) {
    res.redirect(loginPath);
  } else {
    // Validate token and continue to app
    if(await validateAuthorization(authorization)) {
      next();
    } else {
      res.redirect(loginPath);
    }
  }
}


const validateAuthorization = async (authorization: string) => {
  try {
    const token = authorization.split(" ")[1];
    const JWTVerifyResult = await validerToken(token);
    return !!JWTVerifyResult?.payload;
  } catch (e) {
    LogError('azure ad error', e);
    return false;
  }
}

export const azureUserInfo = async function(req: Request, res: Response) {
  const {authorization} = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const JWTVerifyResult = await validerToken(token);
    res.json(JWTVerifyResult);
  } catch (e) {
    LogError('azureUserInfo', e);
    res.sendStatus(500);
  }
}
