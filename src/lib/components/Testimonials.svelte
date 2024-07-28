<script lang="ts">
	import { createAvatar } from '@dicebear/core';
	import { initials, miniavs, thumbs } from '@dicebear/collection';

	import { cn } from "$lib/utils";
	export let pauseOnHover: boolean = false;
	export let vertical: boolean = false;
	export let repeat: number = 4;
	export let reverse: boolean = false;

	export let data = [];

	function generateSVGAvatar(name) {
		return createAvatar(miniavs, {
			seed: name,
			dataUri: true,
			bodyColor: ['afef2c', '90d50d', '6eaa06'],
			hair: ["balndess","classic01","classic02", 'curly', 'ponyTail', 'stylish']
			// skinColor: ['f0d8c9', 'e9c2a9', 'd9b18c'],
		});
	}

	let className: any = "";
	export { className as class };
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden "
>

<div
	class={cn(
    "group flex overflow-hidden p-2 [--duration:2s] [--gap:1rem] [gap:var(--gap)]",
    {
      "flex-row": !vertical,
      "flex-col": vertical,
    },
    className
  )}
>

	{#each { length: repeat } as _, i (i)}
		<div
			class={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
        "animate-marquee flex-row": !vertical,
        "animate-marquee-vertical flex-col": vertical,
        "group-hover:[animation-play-state:paused]": pauseOnHover,
        "[animation-direction:reverse]": reverse,
      })}
		>
			{#each data as data}
			<figure
				class={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-lg border p-4",
      "border-gray-950/[.1] hover:bg-gray-950/[.02] hover:shadow-lg transition-all duration-300 ease-out",
    )}
			>
				<div class="flex flex-row items-center gap-2">
					<span class="rounded-full h-10 w-10 overflow-hidden">
						{@html generateSVGAvatar(data.name)}
					</span>
					<div class="flex flex-col">
						<!-- svelte-ignore a11y-structure -->
						<figcaption class="text-sm font-medium dark:text-white">
							{data.name}
						</figcaption>
						<a href={data.url} class="text-xs font-medium dark:text-white/40" target={data.url ? '_blank': ''}>{data.company}</a>
					</div>
				</div>
				<blockquote class="mt-2 text-xs">{data.body}</blockquote>
			</figure>
				{/each}
		</div>
	{/each}
</div>

	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
	></div>
</div>