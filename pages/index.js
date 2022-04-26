import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured.jsx";
import PizzaList from "../components/PizzaList.jsx";
import styles from "../styles/Home.module.css";

export default function Home({pizzalist}) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Restaurant in Newyork</title>
				<meta name="description" content="Best Pizza shop in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<PizzaList pizzalist={pizzalist} />
		</div>
	);
}
export const getServerSideProps = async () => {
	const res = await axios.get("http://localhost:3000/api/products");
	return {
		props: {
			pizzaList:res.data,
		}
	}
 }