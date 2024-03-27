import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	if (location.pathname === "/")
	return (
		<nav className="navbar mb-3 mt-3 d-flex justify-content-end">
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div> 
		</nav>
	);
};
