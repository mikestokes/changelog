import { db } from '../_helpers/firebase';

export async function get(req, res) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = req.params;

	// TODO: completely fails with no internet connection... timesout then 500s

	db.collection('logs').doc(slug).get()
		.then(doc => {
			if (!doc.exists) {
				console.info(`No such change log: ${slug}`);
				
				res.writeHead(302, {
					Location: 'https://jiffy.page',
				});

				res.end();
			} else {
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify(doc.data()));
			}
		})
		.catch(err => {
			console.error('error', err);
			res.end();
		})
}