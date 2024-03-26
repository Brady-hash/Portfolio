import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';



import App from './App';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import ContactMe from './components/pages/ContactMe';
import Resume from './components/pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <AboutMe /> },
      { path: 'portfolio', element: <Portfolio/> },
      { path: 'contact', element: <ContactMe /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
