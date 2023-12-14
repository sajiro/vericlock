import { useCallback } from "react";
import { createTestApiError, useAuthentication } from "../App";
import {
  Employee,
  Job,
  JobForUpdate,
  ServiceItem,
  TestConfig,
} from "../models/models";

/* import { useAuthentication } from "./useAuthentication";
 */
async function callApi<T>(
  config: TestConfig,
  uri: string,
  authtoken: string | undefined,
  payload: any
) {
  const headers: HeadersInit = {
    "content-type": "application/json",
    VERICLOCK_API_PUBLIC_KEY: config.VERICLOCK_API_PUBLIC_KEY,
    VERICLOCK_DOMAIN: config.VERICLOCK_DOMAIN,
  };
  if (authtoken) headers["VERICLOCK_AUTHTOKEN"] = authtoken;

  const results = await fetch(config.baseUrl + uri, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  //fall through, no error
  const body = (await results.json()) as T;
  if (results.status === 200) return body;
  else throw createTestApiError(results, body);
}

export function useVeriClockApi() {
  const authCtx = useAuthentication();
  const authtoken = authCtx?.authentication.authToken.token;
  const config = authCtx?.config;

  const fetchEmployees = useCallback(async () => {
    if (!authtoken || !config)
      throw new Error("Not logged in - should not be making api calls");
    return await callApi<Employee[]>(config, "/employee/query", authtoken, {});
  }, [authtoken, config]);

  const fetchJobs = useCallback(async () => {
    if (!authtoken || !config)
      throw new Error("Not logged in - should not be making api calls");
    return await callApi<Job[]>(config, "/job/query", authtoken, {
      status: "active",
    });
  }, [authtoken, config]);

  const fetchServiceItems = useCallback(async () => {
    if (!authtoken || !config)
      throw new Error("Not logged in - should not be making api calls");
    return await callApi<ServiceItem[]>(
      config,
      "/serviceItem/query",
      authtoken,
      { status: "active" }
    );
  }, [authtoken, config]);

  const updateJob = useCallback(
    async (job: JobForUpdate) => {
      if (!authtoken || !config)
        throw new Error("Not logged in - should not be making api calls");
      return await callApi<Job>(
        config,
        `/job/${job.guid}/update`,
        authtoken,
        job
      );
    },
    [authtoken, config]
  );

  return {
    fetchEmployees,
    fetchJobs,
    updateJob,
    fetchServiceItems,
  };
}
