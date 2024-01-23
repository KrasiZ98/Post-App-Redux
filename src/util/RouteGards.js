import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const RouteGards = ({ children }) => {
    const user = useSelector((state) => state.users.user);

    if (user.email === undefined) {
        return <Navigate to='/login'></Navigate>
    }

    return children ? children : <Outlet />;
}

export default RouteGards