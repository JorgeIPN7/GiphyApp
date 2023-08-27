import { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

export const GiphyApp = () => {
	const [categories, setCategories] = useState([]);

	const onClickAddNewCategory = (category) => {
		if (categories.includes(category)) return;

		setCategories([category, ...categories]);
	};

	return (
		<>
			<h1>GiphyApp</h1>

			<AddCategory onClickAddNewCategory={onClickAddNewCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
