<template>
  <el-header height="120">
    <div class="top-head">
      <el-image class="img" :src="img_src"></el-image>
      <el-input class="input" v-model="q_string" placeholder="请输入内容">
        <el-button slot="append" icon="el-icon-search" type></el-button>
      </el-input>
      <!-- <el-button icon="el-icon-user" type=""></el-button> -->
      <div class="menu-box2">
        <!-- <el-button type icon="el-icon-user-solid" @click="pop">登录</el-button> -->

        <!-- Form -->
        <el-button type icon="el-icon-user-solid" @click="dialogFormVisible = true">登录</el-button>

        <el-dialog class="dialog" title="用户登录" :visible.sync="dialogFormVisible" width="400px">
          <el-form :model="form">
            <el-form-item label="帐号：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off">
                <!-- <i slot="prefix" class="el-icon-user"></i> -->
              </el-input>
            </el-form-item>
            <el-form-item label="密码：" :label-width="formLabelWidth">
              <el-input v-model="form.passwd" :type="pwd_type">
                <i slot="suffix" class="el-icon-view" @click="show_pwd"></i>
              </el-input>
            </el-form-item>
            <el-form-item class="submit-btn">
              <el-button type="primary" @click="dialogFormVisible = false">登录</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <router-link :to="{name:'SignUp'}">
          <el-button type icon="el-icon-user">注册</el-button>
        </router-link>
      </div>
    </div>

    <div class="menu-box">
      <el-menu
        class="menu-center"
        default-active="1"
        mode="horizontal"
        background-color="#4fb53d"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="1">
          <em><router-link to='/'>首页</router-link></em>
        </el-menu-item>
        <!-- <el-menu-item index="2">
          <em>书架</em>
        </el-menu-item> -->
        <el-menu-item index="2">
          <em>关于</em>
        </el-menu-item>
        <el-menu-item index="3">
          <em>个人中心</em>
        </el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      q_string: "",
      img_src: require("../assets/logo.b5b4c.png"),
      dialogFormVisible: false,
      form: {
        name: "",
        passwd: ""
      },
      formLabelWidth: "60px",
      pwd_type: "password"
    };
  },
  methods: {
    pop() {
      alert("测试！");
    },
    show_pwd() {
      this.pwd_type === "password"
        ? (this.pwd_type = "")
        : (this.pwd_type = "password");
      let e = document.getElementsByClassName("el-icon-view")[0];

      this.pwd_type == ""
        ? e.setAttribute("style", "color: #409EFF")
        : e.setAttribute("style", "color: #c0c4cc");
    }
  },
  components: {}
};
</script>
<style scoped>
.el-header {
  padding: 0;
  margin-top: 20px;
  height: 120px;
  width: 100%;
}
.top-head {
  display: block;
  width: 1020px;
  margin: 5px auto;
  overflow: hidden; /*使用BFC*/
}
.top-head .img {
  float: left;
}
.top-head .input {
  margin-top: 5px;
  margin-left: 15%;
  width: 40%;
  float: left;
}
.menu-box {
  display: block;
  background: #4fb53d;
  margin: auto;
  text-align: center;
}
.menu-box em {
  font-style: normal;
  font-size: 16px;
}

.menu-box .menu-center {
  width: 1020px;
  padding: 0;
  margin: 0 auto;
}
.menu-box2 {
  margin-top: 5px;
  float: right;
}
.submit-btn {
  text-align: center;
}
.dialog {
  text-align: center;
  margin: auto;
  padding: 0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
a {
  text-decoration: none;
}
</style>