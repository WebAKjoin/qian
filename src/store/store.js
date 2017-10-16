import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

var store =new Vuex.Store({
	state:{
		navData:null,
		articleData:null,
		state:false
	},
	actions:{
		getAlldata({commit}){
			var dataNav=new Promise((resolve,reject)=>{
				this.axios.get('http://localhost:9999/api/front_article/getNav').then((data)=>{
					commit("navData_m",data.data.data)
				})
			})
			
			var dataArticle=new Promise((resolve,reject)=>{
				this.axios.get('http://localhost:9999/api/front_article/getArticleAll').then((data)=>{
					commit("navActicle_m",data.data.data)
				})
			})
//			console.log('1111')
			return {
				dataNav,
				dataArticle
			}
		},
		defaultData({dispatch,commit},fn){
			Promise.all([dispatch("getAlldata").dataNav,dispatch("getAlldata").dataArticle]).then(()=>{
				commit("state_m",true)
				fn()
			})
			
		}
		
		
	},
	mutations:{
		navData_m(state,data){
			state.navData=data
		},
		navActicle_m(state,data){
			state.articleData=data
		},
		state_m(state,data){
			console.log(state)
			state.state=data
		}
	}
})

export default store
