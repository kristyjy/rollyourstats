<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
.btn {
  background-color: var(--color1);
  color: var(--light);
  padding: 2rem;
  border: none;
  border-radius: 3px;
}
</style>

