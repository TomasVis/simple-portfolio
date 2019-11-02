import React, {useState, useEffect} from 'react';

import '../App.css';
import {Link} from 'react-router-dom';

function Contacts() {

	useEffect(() =>{
fetchItems()
	},[]);
	const [items, setItems] = useState([]);

	const fetchItems = async () =>{
		const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
		
		const items = await data.json();
		console.log(items.items)
		setItems(items.items);
	}
  return (
    <div>Contacts
    </div>
  );
}

export default Contacts;
