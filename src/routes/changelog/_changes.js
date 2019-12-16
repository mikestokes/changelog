// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const changes = [
	{
		title: 'New Feature',
		draft: true,
		tags: ['new'],
		published: dayjs().add(5, 'day'),		// can be in the future for scheduled publishing
		publishedAgo: dayjs().add(5, 'day').fromNow(),
		markdown: `
			<p class="py-6">
				👋 Welcome fellow <a class="text-teal-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and miminal monochrome blog fan.  This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
			</p>

			<p class="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>	
		`
	},
	{
		title: 'What is Sapper?',
		draft: false,
		tags: ['fix'],
		published: dayjs().subtract(7, 'day'),		// can be in the future for scheduled publishing
		publishedAgo: dayjs().subtract(7, 'day').fromNow(),
		markdown: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>
		`
	},
	{
		title: 'How to use Sapper',
		draft: false,
		tags: ['improvement'],
		published: dayjs().subtract(1, 'month'),
		publishedAgo: dayjs().subtract(1, 'month').fromNow(),
		markdown: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>
		`
	}
];

changes.forEach(change => {
	change.markdown = change.markdown.replace(/^\t{3}/gm, '');
});

export default changes;
