<template>
  <div class="input-label">
    <label :for="idInput">
      {{ content }}
    </label>
    <input :type="type" :id="idInput" :placeholder="placeholder" required />
  </div>
</template>

<script>
export default {
  name: "inputLabel",
  data() {
    return {
      decisionRequired: false,
    };
  },
  props: ["type", "idInput", "placeholder", "content"],
};
</script>

