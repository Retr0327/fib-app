const customFetch = async ({ method, url, credentials }) => {
    const _credentials = credentials ?? {};
    const _method = method.toUpperCase();
  
    const resp = await fetch(url, {
      credentials: "include",
      method: _method,
      body: _method !== "GET" ? JSON.stringify(_credentials) : null,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return resp.json();
  };
  
  export default customFetch;
  