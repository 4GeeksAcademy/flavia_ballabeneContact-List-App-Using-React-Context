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
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
  
    useEffect(() => {
        actions.fetchOneContact(id);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name,
            email,
            phone,
            address
        };
        actions.updateContact(id, contact);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");

        navigate("/");
    };
// do not update the list
    return (
        <div style={{ width: '50rem', marginTop: '2rem' }}>
            <h2 className="d-flex justify-content-center">Update Contact</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex flex-wrap">
            <label for="name" className="form-label">Full Name</label>
                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={store.contacts.name} />
            </div>
            <div className="mb-3">
            <label for="email" className="form-label">Email</label>
                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={store.contacts.email} />
            </div>
            <div className="mb-3">
            <label for="phone" className="form-label">Phone</label>
                <input className="form-control" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={store.contacts.phone} />
             </div>
             <div className="mb-3">
            <label for="address" className="form-label">Address</label>
                <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder={store.contacts.address} />
            </div>
                <button type="submit" className="btn btn-primary" style={{ width: '50rem' }}>Save</button>
            </form>
            <Link to="/">or get back to contacts</Link>

        </div>
    );
};