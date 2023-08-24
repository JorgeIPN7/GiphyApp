import React from 'react';
import { createRoot } from 'react-dom/client';
import { GiphyApp } from './GiphyApp';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GiphyApp />
	</React.StrictMode>
);
