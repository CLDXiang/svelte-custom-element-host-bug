<svelte:options customElement="my-element" />

<script lang="ts">
	function ok(greeting: string) {
		$host().dispatchEvent(
			new CustomEvent('greeting', { detail: greeting })
		);
	}

  function fail(greeting: string) {
    const element = $host() as HTMLElement;
		element.dispatchEvent(
			new CustomEvent('greeting', { detail: greeting })
		);
	}
</script>

<div>
  <button onclick={() => ok('hello')}>This will be ok</button>
  <button onclick={() => fail('hello')}>This will throw</button>
</div>
