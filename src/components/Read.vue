<template>
  <div>
    <h2>{{this.context.chapter_name}}</h2>
    <el-card>
      <p v-for="i in this.context.context">{{i}}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ChapterDetail",
  data() {
    return {
      context: ""
    };
  },
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
  }
};
</script>
<style scoped>
p {
  line-height: 40px;
  text-indent: 2em;
}
</style>


