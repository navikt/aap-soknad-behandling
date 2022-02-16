import { useState, useEffect } from "react";
import fetch from 'cross-fetch';
import {APP_URL_TEST} from "../config";

export type ApiResponse = {
  data: any;
  error: string;
  loading: boolean;
};

export const useFetch = (path: string): ApiResponse => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const doFetch = async () => {
      setLoading(true);
      let url = path;
      if (process.env.NODE_ENV === "test") {
        url = APP_URL_TEST + path;
      }
      try {
        const res = await fetch(url, {method: "GET", credentials: "include"});
        const data = await res.json();
        if (isMounted) {
          data && setData(data);
          setLoading(false);
        }
      } catch (e) {
        console.error(e);
        setError(`Error fetch: ${e}`);
        setLoading(false);
      }
    }
    doFetch();
    return () => { isMounted = false; }
  }, []);

  return { data, error, loading };
};
