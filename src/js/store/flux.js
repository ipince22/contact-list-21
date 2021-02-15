const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			//----DIQ-------------------------------------------
			loadContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ipince")
					.then(res => res.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log("Error:", error));
			},
			editContact: (obj, id) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ipince" + id, {
					method: "PUT",
					body: JSON.stringify(obj),
					headers: { "Content-Type": "application/json" }
				})
					.then(res => res.json())
					.then(data => {
						console.log("edit:", data);
						getActions().loadContacts();
					})
					.catch(error => console.log("Error:", error));
			},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ipince" + id, {
					method: "DELETE"
				})
					.then(res => res.json())
					.then(data => {
						console.log("Delete:", data);
						getActions().loadContacts();
					})
					.catch(error => console.log("Error:", error));
			},
			newContact: obj => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ipince", {
					method: "POST",
					body: JSON.stringify(obj),
					headers: { "Content-Type": "application/json" }
				})
					.then(res => res.json())
					.then(data => {
						console.log("New:", data);
						getActions().loadContacts();
					})
					.catch(error => console.log("Error:", error));
			},
			//----DIQ-----------------------------------------------------------

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
