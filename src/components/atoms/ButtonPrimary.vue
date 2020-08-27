<template>
  <button :type="type" :class="button">{{ content }}</button>
</template>

<script>
export default {
  name: "buttonPrimary",
  props: ["type",'content', 'button'],
};
</script>