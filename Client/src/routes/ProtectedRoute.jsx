import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./../provider/authProvider";

export const ProtectedRoute = () => {
	const token = useAuth();

	if (!token) {
		return <Navigate to='./signIn' />;
	}

	return <Outlet />;
};
