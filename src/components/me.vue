<template>
    <el-table
    :data="allder"
    style="width:90%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="200">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="手机">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容">
    </el-table-column>
  </el-table>
</template>

<style>
table{
    border-collapse: collapse;
}
.el-table{
    background-color:#8d7e7e;
    background-image: url(../../static/images/blog2.jpg);
    background-size: 100% 100%;
     margin:20px;
}
.el-table tr{
    background-color: rgba(35, 28, 224, 0);
}
.el-table td{
    cursor: pointer;
}
.cell{
    text-align: center;
}
 table td{
     border:1px solid #fff;
     color: #b1b1b1;
     font-size:14px;
     text-align: center;
     padding: 10px;
 }
</style>

<script>
    export default {
        data() {
            return {
              allder:null,
            }
        },
        mounted() {
            this.axios.get("/api/myresume/lists").then(function(data) {
              console.log(data.data.data)
                this.allder = data.data.data
                
            }.bind(this))
        }
    }
</script>
