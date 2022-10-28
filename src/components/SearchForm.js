import { useState } from "react";
import styles from "./styles/form.module.css";

const SearchFrom = (props) => {
	const { onSubmit } = props;
	const [searchFieldValue, setSearchFieldValue] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		onSubmit(searchFieldValue.trim());
		e.target.reset();
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setSearchFieldValue(value);
	};
	return (
		<form className={styles.findVideos} onSubmit={submitForm}>
			<input
				type='text'
				name='textarea'
				onChange={handleChange}
				placeholder='Что будем искать?'
				className={styles.searchField}
				autoComplete='off'
			/>
			<button className={styles.searchBtn}>
				Поиск
			</button>
		</form>
	);
};

export default SearchFrom;
