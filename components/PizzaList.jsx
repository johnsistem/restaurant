import React from 'react';
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard.jsx';
const PizzaList = ({ pizzalist }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THES BEST PIZZA IN THE TOWN</h1>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
				arcu in pretium molestie. Interdum et malesuada fames acme. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<div className={styles.wrapper}>
				{pizzalist.map((pizza) => (

				<PizzaCard key={pizza._id} pizza={pizza} />
				))}
				{/* <PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard /> */}
			</div>
		</div>
	);
};

export default PizzaList;
