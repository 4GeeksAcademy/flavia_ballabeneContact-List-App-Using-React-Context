import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 d-flex justify-content-end">
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div> 
		</nav>
	);
};
