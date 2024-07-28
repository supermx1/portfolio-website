<script>
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Emeka.pro - A portfolio website</title>
</svelte:head>
<div class="dark:bg-neutral-900">
	<Header/>
	<slot/>
	<Footer/>
</div>
