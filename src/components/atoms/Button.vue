<template>
  <button :type="type" :class="buttonClass">{{ content }}</button>
</template>

<script>
export default {
  name: "buttonDefault",
  props: ["type",'content', 'buttonClass'],
};
</script>