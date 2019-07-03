<template>
  <div>
    <!-- <button @click="get">加载</button> -->
    <!-- <p>{{this.book}}</p> -->
    <Header />

    <el-card class="wrap">
      <el-container>
        <el-aside width="200px">
          <el-image :src="book['cover']">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-aside>
        <el-main>
          <el-tag>
            <h1>{{book['name']}}</h1>
          </el-tag>
          <transition name="el-fade-in-linear">
            <el-tag>作者: {{book['author']}}</el-tag>
          </transition>
          <transition name="el-fade-in-linear">
            <el-card class="description">{{book['info']}}</el-card>
          </transition>
        </el-main>
      </el-container>
    </el-card>
    <!-- <p>{{tableData}}</p> -->
    <el-card class="catalog">
      <el-tag>
        <h1>目录</h1>
      </el-tag>
      <el-row :gutter="0">
        <el-col :span="8" v-for="chapter in chapters" :key="chapter.chapter_name">
          <el-card class="grid-content">
            <router-link
              class="router-link"
              :to="{name: 'ChapterDetail', params: { id: book_id, chapterno: chapters.indexOf(chapter) + 1}}"
            >{{chapter.chapter_name}}</router-link>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "book_info",
  data() {
    return {
      // tags: this.$store.state.tags,
      book: "",
      chapters: "",
      book_id: this.$route.params.id
    };
  },
  components: {
    Header
  },
  methods: {},
  created: function() {
    let url = "https://api.doctoroyy.cf/catalogtojson/" + this.$route.params.id;
    if (sessionStorage.getItem(url) !== null) {
      // console.log("使用缓存！");
      let data = JSON.parse(sessionStorage.getItem(url));
      // console.log(data);
      this.book = data;
      this.chapters = this.book["chapters"];
    } else {
      // console.log('使用网络请求！');
      this.$axios
        .get(url)
        .then(response => {
          if (sessionStorage.getItem(url) === null) {
            // console.log(typeof response.data);
            // console.log(response.data);

            sessionStorage.setItem(url, JSON.stringify(response.data));
          }

          this.book = response.data;
          this.chapters = this.book["chapters"];
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 1020px;
  margin: auto;
  padding: 10px;
  /* height: 400px; */
}
.el-image {
  width: 180px;
  height: 240px;
  border: 2px #f5f5f5 solid;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  /* border: 1px red solid; */
}
.description {
  margin-top: 40px;
  padding: 10px;
}
.catalog {
  width: 1020px;
  margin: 20px auto auto auto;
  padding: 10px;
}
.grid-content {
  height: 60px;
  /* border: red  1px solid; */
}
.router-link {
  color: inherit;
  text-decoration: none;
}
</style>
