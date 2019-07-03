<template>
  <div class="container">
    <div class="content-read">
      <div class="chapter-control">
        <a class="prev" v-bind:href="(parseInt(this.$route.params.chapterno) - 1)">上一章</a>
        <span></span>
        <a href="./">目录</a>
        <span></span>
        <a class="next" v-bind:href="(parseInt(this.$route.params.chapterno) + 1)">下一章</a>
      </div>

      <el-card class="content-wrap">
        <div class="chapter-name">
          <h3>{{ this.context.chapter_name }}</h3>
        </div>
        <div class="content">
          <p v-for="i in this.context.context">{{i}}</p>
        </div>
      </el-card>

      <div class="chapter-control">
        <a class="prev" v-bind:href="(parseInt(this.$route.params.chapterno) - 1)">上一章</a>
        <span></span>
        <a href="./">目录</a>
        <span></span>
        <a class="next" v-bind:href="(parseInt(this.$route.params.chapterno) + 1)">下一章</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterDetail",
  data() {
    return {
      context: "",
      next: parseInt(this.$route.params.chapterno) + 1
    };
  },
  computed: {},
  created: function() {
    let url =
      "https://api.doctoroyy.cf/book/" +
      this.$route.params.id +
      "/" +
      this.$route.params.chapterno;
    if (sessionStorage.getItem(url) !== null) {
      // console.log("使用缓存！");
      let data = JSON.parse(sessionStorage.getItem(url));
      // console.log(data);
      this.context = data;
    } else {
      this.$axios
        .get(url)
        .then(response => {
          if (sessionStorage.getItem(url) === null) {
            // console.log(typeof response.data);
            // console.log(response.data);
            sessionStorage.setItem(url, JSON.stringify(response.data));
          }
          this.context = response.data;
        })
        .catch(response => {
          console.log(response);
        });
    }
    //预加载下一章
    let url2 =
      "https://api.doctoroyy.cf/book/" +
      this.$route.params.id +
      "/" +
      (parseInt(this.$route.params.chapterno) + 1);

    if (sessionStorage.getItem(url2) !== null) {
      // console.log("使用缓存！");
      let data = JSON.parse(sessionStorage.getItem(url2));
      // console.log(data);
      // this.context = data;
    } else {
      this.$axios
        .get(url2)
        .then(response => {
          if (sessionStorage.getItem(url2) === null) {
            // console.log(typeof response.data);
            // console.log(response.data);
            sessionStorage.setItem(url2, JSON.stringify(response.data));
          }
          // this.context = response.data;
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>
<style scoped>
.content-read {
  width: 980px;
  /* height: 6000px; */
  margin: auto;
}

.content p {
  /* margin: 1.2% 0; */
}

.content {
  padding: 0 1em 0.5em 1em;
}



.chapter-control {
  /* background: #e2eff3 url(../images/theme_1_bg.1ae7b.png) repeat; */
  font-size: 1.2em;
  height: 70px;
  padding: 0;
}

.chapter-control a,
.chapter-control span {
  display: inline-block;
  vertical-align: middle;
  letter-spacing: normal;
  word-spacing: normal;
}

.chapter-control a {
  transition: color 0.3s, background-color 0.3s;
  text-decoration: none;
  margin: auto;
  padding: 0;
  width: 31%;
  text-align: center;
  line-height: 70px;
  color: #262626;
  font-size: 1.2em;
}

.chapter-control span {
  margin: 0;
  padding: 0;
  height: 32px;
  border-right: 1px solid #d8d8d8;
}

.chapter-control a:hover {
  color: #1a1a1a;
  background: #ede9e1;
  background: rgba(0, 0, 0, 0.03);
}

.chapter-name {
  margin: auto;
  width: 100%;
  font-size: 1.3em;
  color: rgba(12, 24, 12, 0.8);
}

.chapter-name h3 {
  display: block;
  text-align: center;
  margin: 2em auto 0.5em auto;
  font-size: 1.45em;
  /*padding: 10px 30px;*/
}

.content-wrap {
  /* background: #e2eff3 url(../images/theme_1_bg.1ae7b.png) repeat; */
  text-indent: 2em;
  line-height: 255%;
  word-wrap: break-word;
  word-break: break-all;
  border: 1px solid #d8d8d8;
  margin: 0.5em auto;
  /* font-family: "Microsoft YaHei", PingFangSC-Regular, HelveticaNeue-Light, */
  /* "Helvetica Neue Light", sans-serif; */
  font-size: 1.2em;
}
</style>


