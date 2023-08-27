import { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ onClickAddNewCategory }) {
	const [category, setCategory] = useState('');

	const onSubmitCategory = (event) => {
		event.preventDefault();

		onClickAddNewCategory(category);
		setCategory('');
	};

	const onAddCategory = ({ target }) => {
		setCategory(target.value);
	};

	return (
		<form onSubmit={onSubmitCategory} className='input-container'>
			<div className='input-button'>
				<input type='text' value={category} placeholder='Buscar...' onChange={onAddCategory} className='input-field' />
				<button type='submit' className='action-button'>
					Agregar
				</button>
			</div>
		</form>
	);
}

export default AddCategory;

AddCategory.propTypes = {
	onClickAddNewCategory: PropTypes.func.isRequired,
};
