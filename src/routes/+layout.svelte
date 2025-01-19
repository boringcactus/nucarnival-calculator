<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-auto">
	{@render children()}
</div>
