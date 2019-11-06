import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
	const navStyle = {
		  color:"#38a7ba"
	}
  return (
    <nav >
		<h3>Logo</h3>
		<ul className="nav-links">
			<Link style= {navStyle } to="/">
				<li>Home</li>
			</Link>
			<Link style= {navStyle } to="/projects">
				<li>Projects</li>
			</Link>
			<Link style= {navStyle } to="/other">
				<li>Other</li>
			</Link>
			<Link style= {navStyle } to="/contacts">
				<li>Contacts</li>
			</Link>
		</ul>
    </nav>
  );
}

export default Nav;
