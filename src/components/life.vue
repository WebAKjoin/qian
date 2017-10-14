<template>
    <div class='life'>
        <p><img src="../../static/images/blog3.jpg" alt=""></p>
        <p><img src="../../static/images/blog4.jpg" alt=""></p>
    </div>
</template>

<style>
.life{
    width:90%;
    height:200px;
    display:flex;
    flex-wrap:wrap;
}
.life p{
    width:45%;
    padding:10px;
}
.life p img{
    width:100%;
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
