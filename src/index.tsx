import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools  } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App';
import './styles/global.scss'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
    </React.StrictMode>
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
