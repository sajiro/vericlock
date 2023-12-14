export type AuthenticationResponse = {
  authToken: {
    token: string;
  };
  domain: string;
  companyName: string;
};
export type Employee = {
  guid: string;
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Job = {
  id(id: any): void;
  guid: string;
  parentGuid: string | null;
  code: number;
  name: string;
  description: string;
};
export type JobForUpdate = Partial<Job> & Pick<Job, "guid">;

export type ServiceItem = {
  guid: string;
  parentGuid: string | null;
  serviceItemCode: number;
  name: string;
  description: string;
};

export type TestConfig = {
  baseUrl: string;
  VERICLOCK_API_PUBLIC_KEY: string;
  VERICLOCK_DOMAIN: string;
};

export type LoginFormProps = {
  config: TestConfig;
  onLogin: (value: AuthenticationResponse) => void;
};

export type AuthenticationContextType = {
  config: TestConfig;
  authentication: AuthenticationResponse;
  logout: () => void;
};

export type TestApiError = {
  response: Response;
  body: unknown;
};

export type JobItemProps = {
  code: number;
  name: string;
  description: string;
};
