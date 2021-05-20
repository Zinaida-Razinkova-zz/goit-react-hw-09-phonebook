import { useDispatch } from "react-redux";
import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./components/UserMenu/AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const RegisterView = lazy(() =>
  import("./components/RegisterForm" /* webpackChunkName: "home-page" */)
);
const LoginView = lazy(() =>
  import("./components/LoginForm" /* webpackChunkName: "home-page" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "home-page" */)
);

export default function App() {
  // замена componentDidMount
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
