<template>
    <div class='hello'>
        <h1><img src="../../static/images/1.jpg" class="img_one">{{msg}}</h1>
        <ul>
            <router-link tag='li' to='/home'>首页<span>Home</span></router-link>
            <router-link tag='li' to='/me'>关于我<span>About</span></router-link>
            <router-link tag='li' to='/life'>慢生活<span>Life</span></router-link>
        </ul>
        <main>
           <div class="left">
             <router-view></router-view>
           </div>
           <div class="right">
              <send></send>
              <div class="main">
            <h3>视频教程</h3>
            <p>最新视频</p>
            <a href='http://es6.ruanyifeng.com/'>王尼玛带你玩转ES6</a>
            <a href='https://cn.vuejs.org/'>Vue合集-可按此顺序学习</a>
            <ol>
                <li>王尼玛的VUE-CLI教程</li>
                <li>王尼玛的VUE-ROUTER教程</li>
                <li>VUE实战视频-快餐店收银系统</li>
                <li>CocosCreator视频（前端游戏制作）</li>
            </ol>
          </div>
           </div>
        </main>
    </div>
</template>

<script>
  import send from './send.vue'
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'wxy . 艾の博客'
    }
  },
  components:{
    send:send
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
   width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7) linear-gradient(transparent, #1a1c1e) repeat scroll 0 0;
  background-image: url(../../static/images/2.jpg);
  background-size: 100% 100%;
}
main{
  display: flex;
}
.left{
  flex: 8;

}
.right a{
  cursor: pointer;
   height: 17px;
        margin: 5%;
        font-size: 16px;
        color: #ff2244;
        display: block;
        text-decoration: none;
}
main
   .main h3 {
        width: 90%;
        margin: 5%;
        height: 35px;
        font-size: 30px;
        color: #ff2244;
    }
 .main {
        width: 80%;
        margin: 0 auto;
        background: #fff;
        height: auto;
        margin: 20px auto;
    }

 .main ol {
        border-top: 1px solid #ccc;
        padding: 10px 0;
    }

    .main ol li {
        width: 80%;
        font-size: 14px;
        height: auto;
        margin: 0 auto;
    }
  .main p {
        height: 17px;
        margin: 5%;
        font-size: 16px;
        color: #ff2244;
    }
.right{
  flex: 2;
  padding: 10px;
}
h1 img{
    width:80px;
    height:80px;
    border-radius: 50px;
}
h1{
  color:#fff;
  font-weight:600;
  font-size:44px;
  padding:30px 100px;
  position: relative;
}
ul{
  display:flex;
}
ul li{
  padding:10px 30px;
  text-align: center;
  color:#fff;
  cursor: pointer;
}
li span{
  display:block;
  font-size: 15px;
  opacity: 0;
  transition:all 0.5s ease;
}
li:hover span{
  opacity: 1;
  
}
.img_one{
  position: absolute;
  left:5px;
}
</style>
