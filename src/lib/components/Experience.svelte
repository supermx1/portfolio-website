<script>
	/**
	 * @typedef {Object} DataItem
	 * @property {string} icon - The icon of the item.
	 * @property {string} company - The company of the item.
	 * @property {string} position - The title of the item.
	 * @property {string} date - The date of the item.
	 * @property {boolean} show - Show or hide the item.
	 * @property {string} description - The description of the item.
	 * @property {string[]} keyPoints - The tools used in the item.
	 */

	/**
	 * @type {DataItem[]}
	 */
	export let data = [];

	let showIndex = data.findIndex(item => item.show === true) || 0;

</script>


<div>
	{#each data as { position, icon, company, date, show, description, keyPoints }, index}
	<!-- Item -->
		<div class="group relative flex gap-x-5">
		<!-- Icon -->
		<div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
			<div class="relative z-10 size-6 flex justify-center items-center">
				<img src={icon} alt={company} class="shrink-0 size-6"/>
			</div>
		</div>
		<!-- End Icon -->

		<!-- Right Content -->
		<div class="grow pb-8 group-last:pb-0">
			<h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
				{date}
			</h3>

			<p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
				{company} - {position}
			</p>

			{#if description}
				<p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
					{@html description}
				</p>
			{/if}

			{#if keyPoints && showIndex === index}
				<ul class="list-disc ms-6 mt-3 space-y-1.5">
					{#each keyPoints as keyPoint}
						<li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
							{@html keyPoint}
						</li>
					{/each}
				</ul>
			{/if}


				<button class="mt-3 text-xs text-primary-500 hover:underline dark:text-primary-400" onclick={() => showIndex = index}>
					{#if show}
						Show more
							{:else}
						Show less
					{/if}
				</button>
		</div>
		<!-- End Right Content -->
	</div>
	<!-- End Item -->
	{/each}
</div>