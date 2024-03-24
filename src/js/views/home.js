// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
// import { UpdateContact } from "./updatecontact";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts();
    }, []);

    return (
        <div>
            {/* Display contacts list */}
            <ul>
                {store.contacts.map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.fullName}</span>
                        <span>{contact.email}</span>
                        <span>{contact.address}</span>
                        <span>{contact.phone}</span>
                        <Link to={`/contact/${contact.id}`} className="btn btn-dark me-3">
                            <i className="fas fa-pencil-alt"></i>
                        </Link>
                        {/* <button className="btn btn-dark me-3" onClick={() => Navigate ("/contact/${contact.id}")}>
                        <i className="fas fa-pencil-alt"></i>
                        </button> */}

                        {/* Add edit and delete functionality here */}
                        {/* <Link to="/contact/:contactId"> Edit */}
                {/* <button onClick={(UpdateContact) => actions.updateContact(contact.id)}>Edit</button> */}
                {/* </Link> */}
                        <button onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
