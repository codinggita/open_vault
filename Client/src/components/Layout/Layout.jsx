import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./../Home/Nav";
import Footer from "./../Home/Footer";

function Layout() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
