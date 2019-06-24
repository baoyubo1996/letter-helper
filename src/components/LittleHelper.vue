<template>
  <el-cotainer>
    <el-header>{{msg}}</el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div>
            <el-input v-model="url" placeholder="请输入请求地址"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div>
            <el-input type='textarea' v-model="headers" placeholder="请输入Headers"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div>
            <el-input type='textarea' v-model="body" placeholder="请输入Body"></el-input>
          </div>
        </el-col>
      </el-row>
   <el-row>
        <el-col :span="2" :offset="10">
          <div>
            <el-button type='primary' round @click="toTest">测试</el-button>
          </div>
        </el-col>
         <el-col :span="1">
          <div>
           <el-button type='primary' round @click="toReset">重置</el-button>
          </div>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="24">
          <div>
            <el-input type='textarea' v-model="result" placeholder="返回结果"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-cotainer>
</template>

<script>
export default {
  name: "LittleHelper",
  props: {
    msg: String
  },
  data() {
    return {
      url: '',
      headers: '',
      body: '',
      result:''
    }
  },
  methods:{
    //重置
    toReset () {
        this.url = ''
        this.headers = ''
        this.body = ''
        this.result = ''
    },
    toTest () {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
