import changes from './_changes.js';

const contents = JSON.stringify(changes.map(change => {
	return {
		title: change.title,
		draft: change.draft,
		tags: change.tags,
		published: change.published,
		publishedAgo: change.publishedAgo,
		markdown: change.markdown
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}