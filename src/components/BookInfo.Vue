<template>
  <div
    class="catalogInfo"
    >
    <!-- <button @click="get">加载</button> -->
    <!-- <p>{{this.book}}</p> -->
    <Header />
    <el-card
      v-loading="loading"
      class="wrap">
      <el-container
        v-loading="loading"
      >
        <el-aside width="200px">
          <el-image :src="book.imgSrc">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-aside>
        <el-main>
          <el-tag>
            <h1>{{book.name}}</h1>
          </el-tag>
          <transition name="el-fade-in-linear">
            <el-tag>作者: {{book.author}}</el-tag>
          </transition>
          <transition name="el-fade-in-linear">
            <el-card class="description">{{book.description}}</el-card>
          </transition>
        </el-main>
      </el-container>
    </el-card> 
    <el-card class="catalog">
      <el-tag>
        <h1>目录</h1>
      </el-tag>
      <el-row :gutter="0">
        <el-col :span="8" v-for="chapter in chapters" :key="chapter.name">
          <div
            class="box"
            @click="handleClick(chapter)">
            <el-card
              class="grid-content">
              <div class="router-link">{{chapter.name}}</div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "./Header";
import { mapActions } from 'vuex';

export default {
  name: "book_info",
  data() {
    return {
      // tags: this.$store.state.tags,
      book: null,
      chapters: null,
      // book_id: this.$route.params.id
      loading: true,
    };
  },
  components: {
    Header
  },
  methods: {
    ...mapActions([
      'fetchBookCatalog',
    ]),

    handleClick({novel_id_id, no}) {
      this.$router.push({
        name: 'ChapterDetail',
        params: {
          id: novel_id_id,
          chapterno: no,
        }
      })
    }
  },

  async mounted() {
    const id = this.$route.params.id;
    const res = await this.fetchBookCatalog(id);
    this.loading = false;
    this.chapters = res.data.chapters;
    this.book = res.data.bookInfo;
    // alert(JSON.stringify(res))
  }
};
</script>
<style scoped>
.catalogInfo {
  min-height: 900px;
}
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
