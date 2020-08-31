<template>
  <div>
    <div class="nearby-locations__ranting" v-if="item == 1">
      <img src="../../assets/images/estrela.png" alt="ranting" />
    </div>
    <div
      class="nearby-locations__ranting"
      v-else-if="
        item == 1.1 ||
        item == 1.2 ||
        item == 1.3 ||
        item == 1.4 ||
        item == 1.5 ||
        item == 1.6 ||
        item == 1.7 ||
        item == 1.8 ||
        item == 1.9
      "
    >
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela-meia.png" alt="ranting" />
    </div>

    <div class="nearby-locations__ranting" v-else-if="item == 2">
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
    </div>
    <div
      class="nearby-locations__ranting"
      v-else-if="
        item == 2.1 ||
        item == 2.2 ||
        item == 2.3 ||
        item == 2.4 ||
        item == 2.5 ||
        item == 2.6 ||
        item == 2.7 ||
        item == 2.8 ||
        item == 2.9
      "
    >
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela-meia.png" alt="ranting" />
    </div>

    <div class="nearby-locations__ranting" v-else-if="item == 3">
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
    </div>
    <div
      class="nearby-locations__ranting"
      v-else-if="
        item == 3.1 ||
        item == 3.2 ||
        item == 3.3 ||
        item == 3.4 ||
        item == 3.5 ||
        item == 3.6 ||
        item == 3.7 ||
        item == 3.8 ||
        item == 3.9
      "
    >
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela-meia.png" alt="ranting" />
    </div>
    <div class="nearby-locations__ranting" v-else-if="item == 4">
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
    </div>
    <div
      class="nearby-locations__ranting"
      v-else-if="
        item == 4.1 ||
        item == 4.2 ||
        item == 4.3 ||
        item == 4.4 ||
        item == 4.5 ||
        item == 4.6 ||
        item == 4.7 ||
        item == 4.8 ||
        item == 4.9
      "
    >
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela-meia.png" alt="ranting" />
    </div>
    <div class="nearby-locations__ranting" v-else-if="item == 5">
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
      <img src="../../assets/images/estrela.png" alt="ranting" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ratings",
  props: ["item"],
};
</script>

