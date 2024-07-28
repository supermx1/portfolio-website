<script>
	/** @typedef DataItem
	 * @property {string} icon - The icon of the item.
	 * @property {string} qualification - The qualification received.
	 * @property {string} institution - The name of the institution.
	 * @property {string} date - The date received.
	 */

	/** @type {DataItem[]} */
	export let data = [];
</script>

{#each data as { qualification, icon, institution, date}}
	<div class="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
		<img src={icon} alt={institution + 'logo'} class="shrink-0 size-10 mb-3"/>

	<h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
		{date}
	</h3>

	<p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
		{qualification}
	</p>

	<p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
		{institution}
	</p>
</div>
{/each}