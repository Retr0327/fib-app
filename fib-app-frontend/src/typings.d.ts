export type FormValueType = {
  inputIndex: string;
};

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

export type FibPagePropsType = {
  allValues: { [keys: strnig]: any }[];
  currentIndex: string;
};

export type ControlledProps = {
  label: string;
  name: string;
};

export type ControllerProps = ControlledProps &
  ({ control: "text-input" });
