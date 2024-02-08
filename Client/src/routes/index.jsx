import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Home from "../components/Home/Home";
import Encrypt from "../components/Feature/Encrypt";
import About from "../components/Home/About";
import Drop from "./../components/Feature/Drop";
import SignUp from "../components/Login/SignUp";
import SignIn from "../components/Login/SignIn";
import OpenDrop from "../components/Feature/OpenDrop";

const Routes = () => {
	const { token } = useAuth();

	// Define public routes accessible to all users
	const routesForPublic = [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/encrypt",
			element: <Encrypt />,
		},
		{
			path: "/about",
			element: <About />,
		},
	];

	// Define routes accessible only to authenticated users
	const routesForAuthenticatedOnly = [
		{
			path: "/drop",
			element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
			children: [
				{
					path: "/drop/",
					element: <Drop />,
				},
				{
					path: "/drop/:did",
					element: <OpenDrop />,
				},
			],
		},
		{
			path: "/user",
			element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
			children: [
				{
					path: "/user/:profile",
					element: <div>User Profile</div>,
				}
			],
		},
	];

	// Define routes accessible only to non-authenticated users
	const routesForNotAuthenticatedOnly = [
		{
			path: "/signUp",
			element: <SignUp />,
		},
		{
			path: "/signIn",
			element: <SignIn />,
		},
	];

	// Combine and conditionally include routes based on authentication status
	const router = createBrowserRouter([
		...routesForPublic,
		...(!token ? routesForNotAuthenticatedOnly : []),
		...routesForAuthenticatedOnly,
	]);

	// Provide the router configuration using RouterProvider
	return <RouterProvider router={router} />;
};

export default Routes;
