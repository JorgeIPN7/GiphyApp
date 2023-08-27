import { useEffect, useState } from 'react';
import { getGifsFromApi } from '../utils/getGifsFromApi';

/**
 * Hook personalizado para obtener gifs de una categoría específica.
 * @param {string} category - La categoría de los gifs a obtener.
 * @returns {Object} Un objeto con la lista de gifs y su estado de carga.
 */
function useFetchGifs(category) {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getGifs = async () => {
		const resp = await getGifsFromApi(category);
		setGifs([...resp]);

		setIsLoading(false);
	};

	useEffect(() => {
		getGifs();
	}, []);

	return {
		gifs,
		isLoading,
	};
}

export default useFetchGifs;
