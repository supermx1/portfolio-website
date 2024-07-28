<script>
	import Icon from '@iconify/svelte';

	/** @type {{ data: { title: string, tools: { name: string, icon: string }[] }[] }} */

	export let data = [];

</script>



	<!-- List -->
	<div class="space-y-3">
		{#each data as { title, tools }, index}
		<dl class="flex flex-col sm:flex-row gap-1">
			<dt class="min-w-40">
				<span class="block text-sm text-gray-500 dark:text-neutral-500">{title}:</span>
			</dt>
			<dd>
				<ul>
					{#each tools as { name, icon }, index}
					<li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
						{#if icon}
							<Icon class="shrink-0 size-4 me-1" icon={icon} />
						{/if}
						{name}
					</li>
						{/each}
				</ul>
			</dd>
		</dl>
			{/each}
	</div>
	<!-- End List -->
