<template>
  <el-container>
    <Header/>
    <box_center/>
    <el-footer>
      <div class="copy-right">
        <p>
          <span>Copyright © 2002-2019 xiaoyu All Rights Reserved</span>版权所有
        </p>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
import box_center from './BoxCenter'
import Header from './Header'
export default {
  
  name: "Home",
  data() {
    return {
      
    };
  },
  components: {
    box_center, Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.el-footer {
  width: 100%;
  background: #f5f5f5;
}
.el-footer .copy-right {
  text-align: center;
  width: 1020px;
  margin: auto;
}
</style>
