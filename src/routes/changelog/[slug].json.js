import log from './_log.js';

const contents = JSON.stringify(log)

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}