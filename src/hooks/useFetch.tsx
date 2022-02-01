import { useState, useEffect } from "react";
import fetch from 'cross-fetch';
import {APP_URL} from "../config";
import {Sak} from "../types/Sak";

export type ApiResponse = {
  data: Sak[] | null;
  error: string;
  loading: boolean;
};

export const useFetch = (path: string): ApiResponse => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGet = async () => {
    setLoading(true);
    const url = new URL(path, APP_URL);
    try {
      const res = await fetch(url.toString(), { method: "GET", credentials: "include" });
      const data = await res.json();
      data && setData(data);
      setLoading(false);
    } catch (e) {
      setError(`Error fetch: ${e}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return { data, error, loading };
};
