<template>
  <div class="form-wraper">
    <el-divider>注册</el-divider>

    <el-form :model="formSignUp" label-width="100px">
      <el-form-item label="用户名：">
        <el-input v-model="formSignUp.name" autocomplete="off" placeholder="至少包括6个字符"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="formSignUp.email" autocomplete="off" placeholder="请输入正确的邮箱格式"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="formSignUp.passwd" :type="pwd_type" placeholder="6-18位大小写字母、符号或数字">
          <i slot="suffix" class="el-icon-view" @click="show_pwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码：">
        <el-input v-model="formSignUp.passwd2" :type="pwd_type" placeholder="再次输入密码">
          <i slot="suffix" class="el-icon-view" @click="show_pwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item class="submit-btn" label-width="0">
        <el-button type="primary" @click="dialogFormVisible = false">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formSignUp: {
        name: "",
        passwd: "",
        passwd2: "",
        email: ""
      },
      dialogFormVisible: true,
      pwd_type: "password"
    };
  },
  methods: {
    show_pwd() {
      this.pwd_type === "password"
        ? (this.pwd_type = "")
        : (this.pwd_type = "password");
      let e = document.getElementsByClassName("el-icon-view")[0];

      this.pwd_type == ""
        ? e.setAttribute("style", "color: #409EFF")
        : e.setAttribute("style", "color: #c0c4cc");
    }
  }
};
</script>
<style scoped>
.form-wraper {
  
  margin: 100px auto 0 auto;
  text-align: center;
  /* margin: auto; */
  /* vertical-align: middle; */
  width: 400px;
  height: 400px;
  
  padding: 20px;
  border: 2px #f5f5f5 solid;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.el-form-item__label {
  padding: 0;
}
</style>
