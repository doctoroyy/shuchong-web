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
          <el-tag>作者: {{book['author']}}</el-tag>
          <el-card class="description">{{book['info']}}</el-card>
        </el-main>
      </el-container>
    </el-card>
    <!-- <p>{{tableData}}</p> -->
    <el-card class="catalog">
      <el-tag ><h1>目录</h1></el-tag>
      <el-row :gutter="0">
        <el-col :span="8"  v-for="chapter in chapters" :key="chapter.chapter_name">
          <el-card class="grid-content">{{chapter.chapter_name}}</el-card>
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
      chapters: ""
    };
  },
  components: {
    Header
  },
  methods: {},
  beforeCreate: function() {
    this.$axios
      .get("http://doctoroyy.cf:8000/catalog/" + this.$route.params.id)
      .then(response => {
        this.book = response.data;
        this.chapters = this.book["chapters"];
      })
      .catch(response => {
        console.log(response);
      });
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

</style>
