import { createTestApiError } from "../App";
import { AuthenticationResponse, TestConfig } from "../models/models";

const authUri = "/auth";

export async function callApi<T>(
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
  else
    throw /* new TestApiError(results, body); */ createTestApiError(
      results,
      body
    );
}

export async function authenticate(
  config: TestConfig,
  user: string,
  password: string
) {
  return await callApi<AuthenticationResponse>(config, authUri, undefined, {
    user,
    password,
  });
}
