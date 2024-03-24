// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const SingleContact = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// SingleContact.propTypes = {
// 	match: PropTypes.object
// };


import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const UpdateContact = () => {
    const { contactId } = useParams();
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            fullName,
            email,
            phone,
            address
        };
        actions.updateContact(contactId, contact);
        setFullName("");
        setEmail("");
        setPhone("");
        setAddress("");

        navigate("/");
    };
// do not update the list
    return (
        <div>
            <h2>Update Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                <button type="submit">Save</button>
            </form>
            <Link to="/">Back to Contacts</Link>

        </div>
    );
};
