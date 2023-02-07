import { useState } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";

function Contacts() {
	const [contacts, setContacts] = useState([
		{ fullname: "Trystan Wood", phone_number: " (202) 756-0589" },
		{ fullname: "Lester Watson", phone_number: " (303) 852-7744" },
		{ fullname: "Anthony York", phone_number: " (404) 111-9911" },
		{ fullname: "Arman Fernandez", phone_number: " (505) 222-0055" },
        { fullname: "Tomos Stark", phone_number: " (505) 333-5544" },
        { fullname: "Naima Wells", phone_number: " (606) 852-2525" },
	]);
	return (
		<div id="container">
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
