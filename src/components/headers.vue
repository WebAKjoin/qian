<template>
  <el-row class="block-col-2">
  <el-col :span="12">
    <el-dropdown trigger="click" v-for='i in allder'>
      <span class="el-dropdown-link">
        {{i.cnname}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>

</template>

<script>
    export default {
        data() {
            return {
              allder:'',
              value1: null,
              value2: null
            }
        },
        mounted() {
            this.axios.get("/api/front_article/getNav").then(function(data) {
              console.log(data.data.data)
                this.allder = data.data.data
                
            }.bind(this))
        }
    }
</script>
<style>
.el-dropdown{
  color:#fff;
  padding:10px;
  font-size:20px;
}
</style>