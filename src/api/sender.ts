import { loadSettings } from "../Utils/settings";

const API_BASE = "api.riotgames.com";

const getBaseUrl = (region: string) => `https://${region}.${API_BASE}`;

export const send = async (endpoint: string, region: string, params: any = {}) => {
  const settings = loadSettings();

  params = {
    ...params,
    "api_key": settings.apiKey
  };
  
  let url = `${getBaseUrl(region)}${endpoint}?${Object.keys(params).map(key => `${key}=${params[key]}`).join("&")}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "Accept-Language": "cs-CZ,cs;q=0.9,en;q=0.8,sk;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com"
      }
    });

    if (response.status === 200) {
      return (await response.json());
    }

    return undefined;
  } catch {
    return undefined;
  }
};