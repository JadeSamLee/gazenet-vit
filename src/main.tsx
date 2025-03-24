
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClassificationProvider } from './contexts/ClassificationContext.tsx'

createRoot(document.getElementById("root")!).render(
  <ClassificationProvider>
    <App />
  </ClassificationProvider>
);
