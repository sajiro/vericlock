import { TestConfig } from "./models/models";

const dev = false;
export const ITEMS_PER_PAGE = 10;

export const defaults: TestConfig = dev
  ? {
      baseUrl: "https://l.vericlock.dev/api/1.0",
      VERICLOCK_API_PUBLIC_KEY: "64a19c19-5930-4ae8-891c-7976b62a935c",
      VERICLOCK_DOMAIN: "starks",
    }
  : {
      baseUrl: "https://www.primate.vericlock.com/api/1.0",
      VERICLOCK_API_PUBLIC_KEY: "87bce028-b39f-4a7a-9139-944c324c35c6", //TODO: put your public key here
      VERICLOCK_DOMAIN: "erwinrosariocorp", //TODO: put your domain here
    };
