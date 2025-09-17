import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';

import App from './App';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
);