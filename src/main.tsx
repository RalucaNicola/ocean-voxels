import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { setAssetPath } from '@esri/calcite-components/dist/components';
setAssetPath('https://unpkg.com/@esri/calcite-components/dist/calcite/assets');
import './main.css';

import ErrorPage from './pages/ErrorPage';
import App from './components/App';
import { getPreloadedState, configureAppStore } from './store/storeConfiguration';

(async () => {
  const root = createRoot(document.getElementById('root') as HTMLElement);

  try {
    const preloadedState = getPreloadedState();
    root.render(
      <StrictMode>
        <ReduxProvider store={configureAppStore(preloadedState)}>
          <App></App>
        </ReduxProvider>
      </StrictMode>
    );
  } catch (err) {
    root.render(<ErrorPage />);
  }
})();
