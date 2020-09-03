<template>
  <div>
    <common-card title="累计销售额" value="￥32,039,165">
      <template>
        <div class="compare-wraper">
          <div class="compare">
            <span>日同比:</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
            <!-- <div class="decrease"></div> -->
          </div>
          <div class="compare">
            <span>月同比:</span>
            <span class="emphasis">7.33%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">￥32,039,165</span>
      </template>
    </common-card>
  </div>
</template>
<script>
import commonCardMixin from "../../mixins/commonCardMixin.js";
export default {
  mixins: [commonCardMixin],
};
</script>

<style lang="scss" scoped>
.compare-wraper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    // align-content: center;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
    
  }
}


</style>