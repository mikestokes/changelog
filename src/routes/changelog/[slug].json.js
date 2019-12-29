import * as admin from 'firebase-admin';
import serviceAccount from '../_helpers/service-account.js';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://productlogdotdev.firebaseio.com'
});

let db = admin.firestore();

export async function get(req, res) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = req.params;

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
			console.error(err);
			res.end();
		})
}