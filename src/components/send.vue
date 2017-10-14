<template>
<div>   
<el-form ref="form" :model="form" label-width="80px" class='sd'>
  <el-form-item label="一级分类">
        <el-select v-model="value" placeholder="请选择" @change='change0'>
            <el-option
            v-for="item in option"
            :key="item.id"
            :label="item.cnname"
            :value="item.id">
            </el-option>
        </el-select>
  </el-form-item>
  <el-form-item label="二级分类">
    <el-select v-model="value1" placeholder="请选择" @change='change1'>
            <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.cnname"
            :value="item.id" 
            >
            </el-option>
        </el-select>
  </el-form-item>
  <el-form-item label="时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
</el-form>
    
</div>

</template>
<script>
    export default {
        name: "api_text",
        data() {
            return {
                editor: null,
                form: {
                    article_name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: [],
                    resource: '是',
                    desc: '',
                },
                selectedOptions: [],
                options: [],
                option: [],
                value: '',
                value1: '',
                oldoptions: [],
                oldoption: [],
                enname_one: ''
            }
        },
        mounted() {
        },
        methods: {
            onSubmit() {
               
            },
            change0() {
                var arry = [];
                for (var i = 0; i < this.oldoptions.length; i++) {
                    if (this.oldoptions[i].parent_id == this.value) {
                        arry.push(this.oldoptions[i])
                    }
                }
                this.options = arry;
            },
            change1() {
                for (var i = 0; i < this.oldoption.length; i++) {
                    if (this.oldoption[i].id == this.value) {
                        this.enname_one = this.oldoption[i].enname;
                    }
                }
            }
        },
        created() {
            var _this = this;
            this.axios.get("/api/back_article/getClass").then(function(data) {
                console.log(data.data.data);
                _this.option = data.data.data[0]
                _this.options = data.data.data[1]
                _this.oldoptions = data.data.data[1]
                _this.oldoption = data.data.data[0]
            })
        }
    }
</script>
<style>
.sd{
  padding-right:20px;}
.sd .el-form-item__label{
  color:#d7e9ff;
}
</style>