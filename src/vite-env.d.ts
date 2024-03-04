/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRODUCTION: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_DEFAULT_LANGUAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
