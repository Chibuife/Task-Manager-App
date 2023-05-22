import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PersonalTaskManager from './PersonalTaskManager';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><PersonalTaskManager /> </>,
  },
]);
function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
