<script context="module">
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';
</script>

<script>
	import '../tailwind.css';
	import NavMega from '../components/NavMega.svelte';
	import Footer from '../components/Footer.svelte';
	import MobileMenu from '../components/MobileMenu.svelte';
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href={SITE_URL + '/api/rss.xml'}
	/>
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
	<link rel="stylesheet" href="https://unpkg.com/carbon-components-svelte/css/g100.css" />
</svelte:head>
<div class="container mx-auto max-w-5xl bg-white px-4 dark:bg-black">
	<MobileMenu />
	<NavMega />
	<div class="my-5">
		<main>
			<slot />
		</main>
	</div>
	<Footer />
</div>
