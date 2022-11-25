import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import App from './Input';
import { ResultProvider } from './ResultProvider';
import { ResultsPage } from "./Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ResultProvider >
    <RouterProvider router={router} />
  </ResultProvider>
)
