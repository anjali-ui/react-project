import {React, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import Resturants from './components/Resturants';

// Example of code spliling, chunking, dynamic loading, when you try to load the component in demand, React try to suspend it for the forst time
// when you come on the page, because REact is render the element before the script has been loaded to network, SO to avoid this bug
// use suspense
// Always lazy load on the top level
const Menu = lazy(() => import('./components/ResturantMenu'));

const AppContainer = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const AppRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppContainer />,
        errorElement: <Error />,
        children: [
            {
                path: '/home',
                element: <Resturants />
            },
            {
                path: '/menu/:id',
                element: <Suspense fallback='showing shimer here'><Menu /></Suspense>
                // dynamic routing Example
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRoute} />);


