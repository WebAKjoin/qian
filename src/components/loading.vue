<template>
	<div>
		数据请求
	</div>
</template>

<script>
	import {mapActions} from "vuex"
	export default{
		name:'loading',
		created(){
			this.defaultData(this.redirectfn)
		},
		methods:{
			redirectfn(){
				this.$router.push("/sode")
			},
			...mapActions(["defaultData"])
		}
	}
</script>

<style>
</style>