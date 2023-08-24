import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifsFromApi } from './utils/getGifsFromApi';
import { GifViewer } from './GifViewer';

function GifGrid({ category }) {
	const [gifs, setGifs] = useState([]);

	const getGifs = async () => {
		const resp = await getGifsFromApi(category);

		console.log('response: ', resp);

		setGifs([...resp]);
	};

	useEffect(() => {
		getGifs();
	}, []);

	return (
		<>
			<h3>{category}</h3>
			<div className='card-grid'>
				{gifs.map((gif) => (
					<GifViewer key={gif.id} title={gif.title} src={gif.src} />
				))}
			</div>
		</>
	);
}

export default GifGrid;

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
