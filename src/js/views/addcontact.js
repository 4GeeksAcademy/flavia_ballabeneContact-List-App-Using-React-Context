// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";

// import { Context } from "../store/appContext";

// import "../../styles/demo.css";

// export const AddContact = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container">
// 			<ul className="list-group">
// 				{store.demo.map((item, index) => {
// 					return (
// 						<li
// 							key={index}
// 							className="list-group-item d-flex justify-content-between"
// 							style={{ background: item.background }}>
// 							<Link to={"/single/" + index}>
// 								<span>Link to: {item.title}</span>
// 							</Link>
// 							{// Conditional render example
// 								// Check to see if the background is orange, if so, display the message
// 								item.background === "orange" ? (
// 									<p style={{ color: item.initial }}>
// 										Check store/flux.js scroll to the actions to see the code
// 									</p>
// 								) : null}
// 							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
// 								Change Color
// 							</button>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 			<br />
// 			<Link to="/">
// 				<button className="btn btn-primary">Back home</button>
// 			</Link>
// 		</div>
// 	);
// };

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            fullName,
            email,
            phone,
            address
        };
        actions.addContact(newContact);
        setFullName("");
        setEmail("");
        setPhone("");
        setAddress("");

        navigate("/");
    };
// (?)need to refresh to see updated page
    return (
        <div style={{ width: '50rem', marginTop: '2rem' }}>
            <h2 className="d-flex justify-content-center">Add New Contact</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex flex-wrap">
            <label for="fullName" className="form-label">Full Name</label>
                <input className="form-control" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Enter Full Name" />
            </div>
            <div className="mb-3">
            <label for="email" className="form-label">Email</label>
                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter Email" />
            </div>
            <div className="mb-3">
            <label for="phone" className="form-label">Phone</label>
                <input className="form-control" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Enter Phone" />
            </div>
            <div className="mb-3">
            <label for="address" className="form-label">Address</label>
                <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="Enter Address" />
            </div>
                <button type="submit" className="btn btn-primary" style={{ width: '50rem' }}>Save</button>
                {/* (?)link above do not fetch */}
            </form>
            <Link to="/">
 				or get back to contacts
			</Link>
        </div>
    );
};
