// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // Define initial state here
            contacts: []
        },
        actions: {
            // Define actions here
            fetchContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/flavia-agenda");
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.log("Error fetching contacts:", error);
                }
            },
            // fetchOneContact: async (contactId) => {
            //     try {
            //         const response = await fetch(`https://playground.4geeks.com/contact/agendas/flavia-agenda/contacts`);
            //         const data = await response.json();
            //         setStore({ contacts: data.contacts });
            //         // getActions().fetchContacts();
            //     } catch (error) {
            //         console.log("Error fetching contacts:", error);
            //     }
            // },
            addContact: async (newContact) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/flavia-agenda/contacts/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: newContact.name,
                            email: newContact.email,
                            // agenda_slug: "flavia-agenda",
                            address: newContact.address,
                            phone: newContact.phone
                        })
                    });
                    
                    const data = await response.json();
                    getActions().fetchContacts();
                } catch (error) {
                    console.log("Error adding contact:", error);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/flavia-agenda/contacts/${contactId}`, {
                        method: "DELETE"
                    });
                    setStore({ contacts: getStore().contacts.filter(contact => contact.id !== contactId) });
                } catch (error) {
                    console.log("Error deleting contact:", error);
                }
            },
            updateContact: async (contactId, contact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/flavia-agenda/contacts/${contactId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: contact.name,
                            email: contact.email,
                            agenda_slug: "flavia-agenda",
                            address: contact.address,
                            phone: contact.phone
                        })
                    });
                    
                    getActions().fetchContacts();
                } catch (error) {
                    console.log("Error updating contact:", error);
                }
            },            
        }
    };
};

export default getState;