<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  name: "image",
  props: ["src", "alt"],
};
</script>