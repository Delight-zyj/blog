<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import myMixin from './config/mixin/index';

export default {
  mixins: [myMixin],
  data() {
    return {
      // 组件自己的数据  
    };
  },
  // 其他组件选项...  
};  
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
