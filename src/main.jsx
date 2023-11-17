import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    children: [
      {
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
