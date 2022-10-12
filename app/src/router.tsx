import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login/index";
import Register from "pages/Register";
import HomeUser from "pages/Home_User";
import { Auth } from "helpers/Auth";

const AuthenticatedRoutes = () => {
  const isAuthenticated = Auth.isAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.LOGIN} />;
};

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.REGISTER} element={<Register />} />

      <Route path="/" element={<AuthenticatedRoutes />}>
        <Route path={RoutePath.HOME_USER} element={<HomeUser />} />
      </Route>
    </Routes>
  );
};

export default Router;


 