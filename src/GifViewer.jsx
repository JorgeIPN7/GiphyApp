import PropTypes from 'prop-types';

export const GifViewer = ({ title, src }) => {
	return (
		<div className='card'>
			<img src={src} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifViewer.propTypes = {
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
};
