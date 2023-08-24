import { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ onClickAddNewCategory }) {
	const [category, setCategory] = useState('');

	const onSubmitCategory = (event) => {
		event.preventDefault();

		console.log('onSubmit ', category);

		onClickAddNewCategory(category);
		setCategory('');
	};

	const onAddCategory = ({ target }) => {
		setCategory(target.value);
	};

	return (
		<form onSubmit={onSubmitCategory}>
			<input type='text' value={category} placeholder='Buscar...' onChange={onAddCategory} />
			<button type='submit'>Agregar</button>
		</form>
	);
}

export default AddCategory;

AddCategory.propTypes = {
	onClickAddNewCategory: PropTypes.func.isRequired,
};
