<script>
	import Icon from '@iconify/svelte';


	/** @type {{ data: {
	 *  name: string,
	 *  url: string,
	 *  date: string,
	 *  mediaType: string,
	 *  mediaUrl: string,
	 *  description: string,
	 *  tools: string[],
	 *  source: string
	 } }} */

	let { data } = $props();
</script>

<div style="opacity: 1; filter: blur(0px); transform: translateY(-6px) translateZ(0px);">
	<div
		class="rounded-lg text-card-foreground flex flex-col overflow-hidden border hover:bg-gray-950/[.02] hover:shadow-lg transition-all duration-300 ease-out h-full">
		<a class="block cursor-pointer" href={data.url} target="_blank">
			{#if data.mediaType === 'video'}
			<video src={data.mediaUrl} autoplay="true" loop="true" muted="true"
						 playsinline="" class="pointer-events-none mx-auto h-40 w-full object-cover object-top">
			</video>
				{:else}
				<img src={data.mediaUrl} alt={data.name + ' hero image'}
						 class="pointer-events-none mx-auto h-40 w-full object-cover object-top">
			{/if}
		</a>
		<div class="flex flex-col px-2">
			<div class="space-y-1"><h3 class="font-semibold tracking-tight mt-1 text-base">{data.name}</h3>
				<time class="font-sans text-xs">{data.date}</time>
				<div class="hidden font-sans text-xs underline print:visible"></div>
				<div class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"><p>{data.description}</p></div>
			</div>
		</div>
		<div class="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
			<div class="mt-2 flex flex-wrap gap-1">
				{#each data.tools as tool}
				<div
					class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100 text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
					{tool}
				</div>
					{/each}
			</div>
		</div>
			<div class="flex items-center gap-x-1 pt-2 px-2 pb-2">
				{#if data.url}
				<div class="flex flex-row flex-wrap items-start gap-1"><a target="_blank" href={data.url}>
					<div
						class="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-950 text-primary-400 shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
						<Icon class="shrink-0 size-3" icon="hugeicons:globe-02" />

						Visit
					</div>
				</a></div>
				{/if}
				{#if data.source}
					<div class="flex flex-row flex-wrap items-start gap-1"><a target="_blank" href={data.source}>
						<div
							class="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-950 text-primary-400 shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
							<Icon class="shrink-0 size-3" icon="hugeicons:github" />

							Source
						</div>
					</a></div>
				{/if}
			</div>
	</div>
</div>