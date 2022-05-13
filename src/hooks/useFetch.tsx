import { useState, useEffect } from "react";
import fetch from "cross-fetch";
import { APP_URL_TEST } from "../config";
import { RequestOptions } from "http";
import { useErrorHandler } from "react-error-boundary";

type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
  status: number;
};

export const fetchGET = (path: string): ApiResponse => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState<number>(-1);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const errorHandler = useErrorHandler();

  useEffect(() => {
    let isMounted = true;
    const doFetch = async () => {
      setLoading(true);
      let url = path;
      if (process.env.NODE_ENV === "test") {
        url = APP_URL_TEST + path;
      }
      try {
        const res = await fetch(url, { method: "GET", credentials: "include" });
        setStatus(res.status);
        if (res.status >= 200 && res.status <= 299) {
          const data = await res.json();
          if (isMounted) {
            data && setData(data);
          }
        }
        setLoading(false);
      } catch (e) {
        console.error(e);
        errorHandler(e);
        setError(`Error fetch: ${e}`);
        setLoading(false);
      }
    };
    doFetch();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, error, loading, status };
};

export const fetchPOST = async (url: string, payload: object, opts: RequestOptions = {}) => {
  const completeUrl = process.env.NODE_ENV === "test" ? `${APP_URL_TEST}${url}` : url;
  const headers = {
    "Content-Type": "application/json",
    ...(opts.headers ? opts.headers : {}),
  };
  try {
    const res = await fetch(completeUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers,
    });
    if (res.ok) {
      let data = {};
      try {
        data = await res.json();
      } catch (e) {
        console.error("Klarte ikke parse json:" + e);
      }
      return { ok: res.ok, data };
    } else {
      return { ok: res.ok, error: res.statusText };
    }
  } catch (e) {
    return { error: `useFetchPOST: ${e}` };
  }
};
