<script>
	import Icon from '@iconify/svelte';
</script>

<!-- ========== FOOTER ========== -->
<footer class="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="py-6 border-t border-gray-200 dark:border-neutral-700">
		<div class="flex flex-wrap justify-between items-center gap-2">
			<div>
				<p class="text-xs text-gray-600 dark:text-neutral-400 font-black">
					© {new Date().getFullYear()} emeka<span class="text-primary-400">.pro</span>.
				</p>
			</div>
			<!-- End Col -->

			<!-- List -->
			<ul class="flex flex-wrap items-center">
				<li class="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
					<a class="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 hover:decoration-primary-400 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://x.com/super__mx" target="_blank">
						X (Twitter)
					</a>
				</li>
				<li class="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
					<a class="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 hover:decoration-primary-400 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://instagram.com/techgfx_" target="_blank">
						Instagram
					</a>
				</li>
				<li class="inline-block pe-4 text-xs">
					<a class="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 hover:decoration-primary-400 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
						 href="https://wa.me/+447955624268?text=Hi%20Emeka%2C%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20chat%20with%20you%20about%20your%20services."
						 target="_blank">
						WhatsApp
					</a>
				</li>
				<li class="inline-block">
					<!-- Dark Mode -->
					<button type="button" class="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-theme-click-value="dark">
						<span class="sr-only">Dark</span>
							<Icon class="shrink-0 size-3.5" icon="hugeicons:moon-02" />
					</button>
					<button type="button" class="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-theme-click-value="light">
						<span class="sr-only">Light</span>

						<Icon class="shrink-0 size-3.5" icon="hugeicons:sun-02" />
					</button>
					<!-- End Dark Mode -->
				</li>
			</ul>
			<!-- End List -->
		</div>
	</div>
</footer>
<!-- ========== END FOOTER ========== -->