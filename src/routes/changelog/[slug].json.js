import { db } from '../_helpers/firebase-admin';
import send from '@polka/send-type';

// Abstract the API layer into node functions so preload can call them from 
// the server of client. Firebase currently has problems when being used
// from Sapper in prerender.
// https://github.com/codediodeio/sveltefire/issues/4

export async function get(req, res) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = req.params;

	// TODO: completely fails with no internet connection... timesout then 500s

	db.collection('logs').doc(slug).get()
		.then(doc => {
			if (!doc.exists) {
				console.info(`No such change log: ${slug}`);
				return send(res, 404, {});
			} else {
				let data = doc.data()

				data.entries = data.entries.map((entry, index) => {
					return {
						id: index,
						...entry
					}
				})

				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify(data));
			}
		})
		.catch(err => {
			console.error('error', err);
			res.end();
		})
}