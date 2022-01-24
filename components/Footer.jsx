import React from "react";
import { styles } from "/styles/NavBar.module.css";

const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: "#ff22",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div style={{ backgroundColor: "#3b3b3021" }}>rojo555</div>
			<div style={{ backgroundColor: "#3b3b3021" }}>centro54</div>
			<div style={{ backgroundColor: "#3b3b3021" }}>right</div>
		</div>
	);
};

export default Footer;
