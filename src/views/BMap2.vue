<template>
  <ve-bmap :settings="chartSettings" ref="bmap"></ve-bmap>
</template>

<script>
export default {
  data() {
    return (this.chartSettings = {
      key: "jEtI4YeoMBky141chG0vuvrfBf7HGTgD",
      bmap: {
        center: [120, 30],
        zoom: 10,
        roam: true,
      },
    });
  },
  mounted() {
    this.getdom();
  },
  methods: {
    getdom() {
      console.log(this.$refs.bmap);
    },
  },
};
</script>