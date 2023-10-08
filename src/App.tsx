
import { createBrowserRouter,RouterProvider,Link,Outlet } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!<Link to="test">ttt</Link><Outlet/></div>,
    children: [
    {
        path: "test",
        element: <div>test</div>,
      }
    ]
  },

]);
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
