<template>
<div class="home">
  <top-view></top-view>
  <sales-view></sales-view>
  <map-view></map-view>
  <bottom-view></bottom-view>
</div>
</template>

<script>
import TopView from "../components/TopView/index";
import SalesView from "../components/SalesView/index";
import MapView from "../components/MapView/index";
import BottomView from "../components/BottomView/index";

export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
