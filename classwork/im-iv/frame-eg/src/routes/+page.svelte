<script lang="ts">
	let counter = $state(1);

	function increment() {
		counter++;
	}

	function decrement() {
		counter--;
	}
</script>

<div class="flex h-screen w-screen place-items-center justify-center">
	<p class="bg-yellow-100 p-8 text-4xl">
		<button
			onclick={() => decrement()}
			class="rounded-sm bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">-</button
		>
		<span>{counter}</span>
		<button
			onclick={() => decrement()}
			class="rounded-sm bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">+</button
		>
	</p>
</div>

<style>
	div {
		background-color: blue;
	}
</style>
