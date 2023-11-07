declare global {
    interface Window {
      _env_: {
        [key: string]: any;
      };
    }
  }
  
  export const API = window._env_?.API ?? "http://localhost:5000";
  