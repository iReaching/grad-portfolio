import React from 'react'
import ReactDOM from 'react-dom/client'

// Vite env shim for TS without @types/vite/client in app tsconfig
declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE?: string
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
