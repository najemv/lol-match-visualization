export type AppSettings = {
  apiKey: string;
  usePreview: boolean;
}

const SETTINGS_KEY = 'settings';

const defaultSettings: AppSettings = {
  apiKey: "",
  usePreview: true
}

export const loadSettings = (): AppSettings => {
  const item = localStorage.getItem(SETTINGS_KEY);
  
  try {
    const settings = JSON.parse(item || "");
    return settings as AppSettings;
  } catch (err) {
    return defaultSettings;
  }
};

export const saveSettings = (settings: AppSettings): boolean => {
  const settingsString = JSON.stringify(settings);
  try {
    localStorage.setItem(SETTINGS_KEY, settingsString);
    return true;
  } catch (err) {
    return false;
  }
};