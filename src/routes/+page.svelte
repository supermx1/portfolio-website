<script>
	import Icon from '@iconify/svelte';
	import Card from '$lib/components/Card.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import { reviews, projects, skills, profile, articles, experiences, education } from '$lib/data/db';
	import Experience from '$lib/components/Experience.svelte';
	import Articles from '$lib/components/Articles.svelte';
	import Education from '$lib/components/Education.svelte';

</script>

<!-- ========== MAIN CONTENT ========== -->
<main id="content">
	<div class="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
		<!-- Profile -->
		<div class="flex items-center gap-x-3">
			<div class="shrink-0">
				<img class="shrink-0 size-16 aspect-auto rounded-full" src="emeka.webp" alt="Avatar">
			</div>

			<div class="grow">
				<h1 class="text-2xl font-black text-gray-800 dark:text-neutral-200">
					Hi, I'm Emeka 👋
				</h1>
				<p class="text-sm text-gray-600 dark:text-neutral-400">
					Software Engineer/Designer
				</p>
			</div>
		</div>
		<!-- End Profile -->

		<!-- About -->
		<div class="mt-8">
			<p class="text-sm text-gray-600 dark:text-neutral-400">
				I am a results-oriented IT professional with over a decade of experience in driving operational efficiency and user satisfaction. My expertise encompasses a broad spectrum, including DevOps, security, software development, and technical support. I have a proven track record of implementing automated solutions, safeguarding systems, and building innovative web applications. Proficient in Frontend development, use of modern frameworks and low-code solutions, I excel at crafting user-centric software that meets business objectives.
			</p>

			<p class="mt-3 text-sm text-gray-600 dark:text-neutral-400">
				My passion for creating exceptional user experiences is evident in my ability to seamlessly blend design and technology.

<!--				With a strong foundation in graphic design, UI/UX, and front-end development, -->
<!--				I deliver visually appealing and functional solutions. I thrive in dynamic -->
<!--				environments, collaborating effectively with cross-functional teams to achieve project goals. -->
<!--				My commitment to staying updated on industry trends ensures I provide cutting-edge solutions that exceed expectations.-->
			</p>

			<ul class="mt-5 flex flex-col gap-y-3">
				{#each profile as {item, icon, url}}
				<li class="flex items-center gap-x-2.5">
					<Icon class="shrink-0 size-3.5" {icon} />
					<a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 hover:decoration-primary-400 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href={url}>
						{item}
					</a>
				</li>
					{/each}
			</ul>
		</div>
		<!-- End About -->

		<!-- Projects -->
		<div id="projects" class="mt-10 sm:mt-14">
			<div class="flex items-center justify-between">
				<h2 class="mb-5 font-bold text-gray-800 dark:text-neutral-200">
					Projects
				</h2>
				<a class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 hover:decoration-primary-400 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://github.com/supermx1?tab=repositories" target="_blank">
					View more >
				</a>
			</div>

			<!-- Image Grid -->
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
				{#each projects as project}
					<Card data={project}/>
				{/each}
			</div>
			<!-- End Image Grid -->
		</div>
		<!-- End Projects -->



		<div id="skills" class="my-10 sm:my-14">
			<h2 class="mb-5 font-bold text-gray-800 dark:text-neutral-200">
				Skills
			</h2>
		<!-- Skills -->
		<Skills data={skills} />
		<!-- End Skills -->
		</div>

		<!-- Testimonials -->
		<div id="reviews" class="mt-10 sm:mt-14">
			<h2 class="mb-3 font-bold text-gray-800 dark:text-neutral-200">
				Reviews
			</h2>

			<Testimonials pauseOnHover class="[--duration:20s]" data={reviews} />

		</div>
		<!-- End Testimonials -->

		<!-- Work Experience -->
		<div class="mt-10 sm:mt-14">
			<h2 class="mb-5 font-bold text-gray-800 dark:text-neutral-200">
				Work experience
			</h2>

			<!-- Timeline -->
			<Experience data={experiences} />
			<!-- End Timeline -->
		</div>
		<!-- End Work Experience -->

		<!-- Education -->
		<div class="mt-10 sm:mt-14">
			<h2 class="mb-3 font-bold text-gray-800 dark:text-neutral-200">
				Education
			</h2>

			<!-- Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
				<Education data={education}/>
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Education -->

		<!-- Articles -->
		<div id="articles" class="my-10 sm:my-14">
			<h2 class="mb-5 font-bold text-gray-800 dark:text-neutral-200">
				Articles
			</h2>

			<!-- List -->
			<Articles data={articles}/>
			<!-- End List -->
		</div>
		<!-- End Articles -->

		<!-- Subscribe -->
		<div class="my-10 sm:my-14">
			<h2 class="mb-5 font-bold text-gray-800 dark:text-neutral-200">
				Subscribe
			</h2>

			<!-- Input -->
			<form>
				<div class="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700">
					<div class="relative w-full">
						<label for="hero-input" class="sr-only">Subscribe</label>
						<div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
							<svg class="shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect width="20" height="16" x="2" y="4" rx="2" />
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
							</svg>
						</div>
						<input type="text" id="hero-input" name="hero-input" class="py-2 ps-9 pe-3 block w-full border-transparent rounded-lg text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500" placeholder="Enter your email">
					</div>
					<a class="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-primary-400 hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200" href="#">
						Join
						<svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</a>
				</div>
				<p class="mt-2 text-xs text-gray-500 dark:text-neutral-500">
					No spam, unsubscribe at any time.
				</p>
			</form>
			<!-- End Input -->
		</div>
		<!-- End Subscribe -->
	</div>
</main>
<!-- ========== END MAIN CONTENT ========== -->