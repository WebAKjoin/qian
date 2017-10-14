<template>
  <div class="home">
      <section v-for='i in allder'>
        <h1>{{i.article_name}}</h1>
        <p>导读：{{i.daodu}}</p>
        <time>{{i.time}}</time>
        <div class="block">
        <el-rate></el-rate>
      </div>
      </section>
  </div>

</template>

<style>
  .home{
    display: flex;
    width:90%;
      flex-wrap: wrap;
  }
section{
  width:300px;
  height:auto;
  border-radius: 20px;
  background: #fff;
  margin:20px;
  padding: 10px 0px;
}
section h1{
  font-weight: 500;
  font-size:20px;
  padding: 10px;
  color: #ff2244;
}
section p{
  padding: 10px;
  font-size:15px;
}
section time{
  float: right;
  font-size:12px;
  padding-right: 10px;
}
</style>
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
            this.axios.get("/api/back_article/getArticle").then(function(data) {
              console.log(data.data.data)
                this.allder = data.data.data
                
            }.bind(this))
        }
    }
</script>
<style scoped>
    .body {
        margin: 20px 0;
    }
    
    .block {
        margin: 40px auto;
    }
    
    .block div {
        text-align: center
    }
</style>