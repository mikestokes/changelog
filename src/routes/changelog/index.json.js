import changes from './_changes.js';

const contents = JSON.stringify(changes.map(change => {
	return {
		...change
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}