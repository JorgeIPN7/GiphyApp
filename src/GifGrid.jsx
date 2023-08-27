import PropTypes from 'prop-types';

import { GifViewer } from './GifViewer';
import useFetchGifs from './hook/useFetchGifs';

function GifGrid({ category }) {
	const { gifs, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			<div className='card-grid'>
				{gifs.map((gif, i) =>
					isLoading ? (
						<img src='./../public/loading.gif' alt='Cargando...' key={i} width={200} />
					) : (
						<GifViewer key={gif.id} title={gif.title} src={gif.src} />
					)
				)}
			</div>
		</>
	);
}

export default GifGrid;

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
