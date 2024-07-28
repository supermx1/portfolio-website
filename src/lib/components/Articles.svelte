<script>
	/** @typedef DataItem
	 * @property {string} title - The article title.
	 * @property {string} url - The url of article.
	 * @property {string} description - The description of the article.
	 * @property {string} date - The date of article.
	 */

	/** @type {DataItem[]} */

	export let data = [];
</script>

<ul class="space-y-10">
	{#each data as { title, url, date, description }, index}
	<li>
		<p class="mb-2 text-sm text-gray-500 dark:text-neutral-500">
			{date}
		</p>
		<h5 class="font-medium text-sm text-gray-800 dark:text-neutral-200">
			{title}
		</h5>
		<p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
			{description}
		<p class="mt-1">
			<a class="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
				 href={url} target="_blank">
				Continue reading
			</a>
		</p>
	</li>
		{/each}
</ul>