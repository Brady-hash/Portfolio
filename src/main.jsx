import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';



import App from './App';
import AboutMe from './components/pages/AboutMe';
import Porfolio from './components/pages/Portfolio';
import ContactMe from './components/pages/ContactMe';
import Resume from './components/pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <AboutMe /> },
      { path: 'portfolio', element: <Porfolio/> },
      { path: 'contact', element: <ContactMe /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
