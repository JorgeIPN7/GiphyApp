const getGifsFromApi = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=jFFqrNhDWci0Uo2KmVWEn5e2kGI6ai4y&q=${category}&limit=5&lang=es&rating=r`;
	const response = await fetch(url);
	const { data } = await response.json();

	console.log(data);

	const result = data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		src: gif.images.fixed_width.url,
	}));

	console.log(category);
	console.log(result);

	return result;
};

export { getGifsFromApi };
