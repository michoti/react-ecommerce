import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../Features/AppContext"

const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation()

    return(
        auth?.auth_user
          ? <Outlet />
          : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;