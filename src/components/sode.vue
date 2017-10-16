<template>
	<div>
		数据请求成功
	</div>
</template>

<script>
	import {mapState} from "vuex";
	export default{
		name:'as',
		computed:{
			...mapState(["navData","articleData"])
		},
		created(){
//			console.log(this.navData)
			if(!this.navData){
				this.$router.push("/loading")
			}
			
		}
	}
	
</script>

<style>
</style>