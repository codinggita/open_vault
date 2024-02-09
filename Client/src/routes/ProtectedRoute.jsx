import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./../provider/authProvider";

export const ProtectedRoute = () => {
	const token = useAuth();

    console.log('ProtectedRoute');
    console.log(typeof(token));
	if (!token.token) {
		return <Navigate to='/signIn' />;
	}

	return <Outlet />;
};
