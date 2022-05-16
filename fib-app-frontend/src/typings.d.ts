export type HTTPMethod =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "post"
  | "POST"
  | "put"
  | "PUT";

export type CredentialsType = {
  [key: string]: any;
};

export type CustomFetchType = {
  method: HTTPMethod;
  url: string;
  credentials?: CredentialsType;
};
