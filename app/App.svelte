<script lang="ts">
  function ongreeting(event: CustomEvent) {
    console.log(event.detail);
  }
</script>

<main>
  <my-element {ongreeting}></my-element>
</main>
