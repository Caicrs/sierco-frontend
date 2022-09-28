import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "pages/Home/index";
import Login from "pages/Login/index"
import Register from 'pages/Register';
import HomeUser from 'pages/Home_User';
import Dashboard from 'pages/Dashboard';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.HOME_USER} element={<HomeUser/>}/>
            <Route path={RoutePath.DASHBOARD} element={<Dashboard/>}/>
        </Routes>
    );
}

export default Router;