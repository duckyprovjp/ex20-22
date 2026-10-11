import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const RouteWrapper = ({ Component }) => {
  const params = useParams();
  return (
    <Container className="mt-4">
      <Component params={params} />
    </Container>
  );
};

export const routes = [
  {
    path: '/',
    component: () => <h1>Home Page</h1>,
    exact: true,
  },
  {
    path: '/products',
    component: () => <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: () => <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: () => <h1>Contact Page</h1>,
  },
  {
    path: '/users/:userId?',
    component: ({ params }) => (
      <h1>User Profile: {params.userId}</h1>
    ),
  },
];

export const renderRoutes = () => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<RouteWrapper Component={route.component} />}
      exact={route.exact}
    />
  ));
};
