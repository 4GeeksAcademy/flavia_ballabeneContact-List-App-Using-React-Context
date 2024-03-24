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
// need to refetch to see updated page?
    return (
        <div>
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                <button type="submit">Save</button>
                {/* link above do not fetch */}
            </form>
            <Link to="/">
 				or get back to contacts
			</Link>
        </div>
    );
};
