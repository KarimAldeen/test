import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Ui/Layout';
import { CrudRoute, menuItems } from './Routes';
import { Spin } from 'antd';

const Page404 = lazy(() => import('./Layout/Ui/NotFoundPage'));
const Auth = lazy(() => import('./Pages/Auth/Page'));

const App = () => {

  const renderRouteElement = (route:any) => (
    <Suspense fallback={<Spin />}>
      {route.header ? (
        <Layout>{route.element}</Layout>
      ) : (
        route.element || <h1>Create the Page Ya Hemar</h1>
      )}
    </Suspense>
  );

  const renderRoutesRecursively = (routes:any) => (
    routes.map((route:any) => (
      <React.Fragment key={route.path}>
        <Route
          path={route.path}
          element={renderRouteElement(route)}
        />
        {route.children && renderRoutesRecursively(route.children)}
      </React.Fragment>
    ))
  );

  return (
    <Routes>
      <Route key={"auth"} path={"/auth"} element={<Suspense fallback={<Spin />}>  <Auth /> </Suspense>} />
      <Route key={"Page404"} path={"/*"} element={<Suspense fallback={<Spin />}>  <Page404 /> </Suspense>} />

      {renderRoutesRecursively(menuItems)}

      {CrudRoute.map((route) => (

        <Route
          key={route.path ?? ""}
          path={route.path ?? ""}
          element={renderRouteElement(route)}
        />


      ))}

    </Routes>
  );
};

export default App;
