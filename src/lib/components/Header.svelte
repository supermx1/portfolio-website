<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	const menu = ["Projects", "Skills", "Reviews", "Articles"];

	let show =  true;

	let activeSection = '';

	onMount(() => {
		const sections = menu.map(item => document.getElementById(item.toLowerCase()));
		const navLinks = document.querySelectorAll('nav .menu');

		const handleScroll = () => {
			let currentSection = '';
			sections.forEach(section => {
				if (section) { // Check if section is not null
					const sectionTop = section.offsetTop;
					if (window.scrollY >= sectionTop - 100) {
						currentSection = section.getAttribute('id') || ''; // Ensure currentSection is a string
					}
				}
			});

			if (currentSection !== activeSection) {
				activeSection = currentSection;
				navLinks.forEach(link => {
					link.classList.remove('active');
					if (link.getAttribute('href') === `#${currentSection}`) {
						link.classList.add('active');
					}
				});
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<!-- ========== HEADER ========== -->
<header class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
	<nav class="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
		<div class="px-4 md:px-0 flex justify-between items-center">
			<!-- Logo -->
			<div>
				<a class="flex-none rounded-md text-xl inline-block font-black focus:outline-none focus:opacity-80" href="#" aria-label="Logo Link">
					emeka<span class="text-primary-400">.pro</span>
				</a>
			</div>
			<!-- End Logo -->

			<div class="md:hidden">
				<!-- Toggle Button -->

				<button onclick={()=> show = !show} type="button" class="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
					{#if show}
					<Icon class="shrink-0 size-3.5" icon="hugeicons:menu-01" />
						{:else }
					<Icon class="shrink-0 size-4" icon="hugeicons:cancel-01" />
						{/if}
				</button>
				<!-- End Toggle Button -->
			</div>
		</div>

		<div id="nav" class:hidden={show} class="hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
			<div class="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
				<a class="menu py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent active text-gray-500 focus:outline-none dark:border-neutral-200 dark:text-neutral-200" href="#" aria-current="page">Home</a>
				{#each menu as item}
					<a href={'#' + item.toLowerCase()} class="menu py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200">
						{item}
					</a>
				{/each}
				<a class="rounded-full px-3 py-2 bg-gray-950 text-primary-400 text-xs font-medium ms-3 md:ms-0 max-w-fit" href="tel:+447955624268">
					<Icon class="shrink-0 size-4" icon="hugeicons:call-ringing-02" />
				</a>
			</div>

		</div>
	</nav>
</header>
<!-- ========== END HEADER ========== -->