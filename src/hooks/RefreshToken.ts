/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import axios from "axios";

import qs from "qs";

interface TokenProps {
  token: string;
}

export const useRefreshToken = () => {
  const [token, setToken] = useState<TokenProps>();

  const data = {
    grant_type: "client_credentials",
  };

  const getRefreshToken = async () => {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic ZWI3ZTQ0MWZkNTZhNGY5YWExZDNhMWEzZTM4ZjU5NjE6YWY1NzQzZjU4YzE0NDc5Njk5ZGQ1Y2Q0ZDYzYzQxZWE=",
        },
      }
    );

    setToken(response.data.access_token);

    return response.data.access_token;
  };

  return { token, getRefreshToken };
};
