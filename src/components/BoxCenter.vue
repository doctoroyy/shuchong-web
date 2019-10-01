<template>
  <div
    class="c-center"
    >
   <!-- <h1>{{}}</h1> -->
    <el-container
      class="box-center1">
      <el-aside width="20%">
        <div class="classify-list">
          <i class="el-icon-menu">
            <span>作品分类</span>
          </i>
          <el-row v-for="i in 6" :key="i">
            <el-col :span="6" v-for="j in 2" :key="j">
              <router-link
                to="/"
              >{{tags[(i - 1) * 2 + j - 1]}}</router-link>
            </el-col>
          </el-row>
        </div>
      </el-aside>
      <el-main>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <el-image :src="img_url[item-1]"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
    <div class="divider-box" style="background:#f5f5f5;">
      <el-divider class="divider">
        <i class="el-icon-folder">{{' '}}全部小说</i>
      </el-divider>
    </div>
    <div class="box-center2">
      <el-row class="el-row-wrap">
        <el-col :span="4" v-for="book in this.books.data" :key="book.id">
          <router-link :to="{name: 'bookInfo', params: { id: book.id }}">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="book.imgSrc" class="image" />
              <div class="cover-bottom">
                <span>{{book.author}}</span>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>


export default {
  name: "box_center",
  props: {
    books: {
      type: Array,
      default: () => [],
    },
    tags: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      img_url: [
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/da505b7f0abfdd6fac6d8bdad81ddc03.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/2b538ec521660989b692bd189066c767.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/a5750a52de8d80697623824150ce3583.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/e4dfdb58b3f1d5d673b2e7fcc9ca9ee5.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/f4a932942cc7d88713e649eee396471a.jpg"
      ],
    }
  }
  
  
};
</script>
<style scoped>
.c-center {
  /* border: 10px solid red; */
  min-height: 600px;
  width: 100%;
  background: #f5f5f5;
}
.box-center1 {
  background: #f5f5f5;
  width: 1020px;
  height: auto;
  margin: 20px auto 20px auto;
}

.box-center1 .el-row .el-col {
  outline: #e6e6e6 1px dotted;
  width: 100px;
  height: 60px;
  font-size: 16px;

  text-align: center;
}
.box-center1 .el-row .el-col:hover {
  background: #c6c6c6;
}

.box-center1 .el-row .el-col a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 60px;
  text-decoration: none;
  color: inherit;
}
.box-center2 {
  min-height: 640px;
  background: #fff;
  width: 1020px;
  margin: 20px auto 20px auto;
  padding: 10px;
  text-align: center;
}
.box-center2 .cover-bottom {
  padding: 8px;
  /* background: #e6e6e6; */
  height: 30px;
}
.box-center2 .cover-bottom span {
  display: inline-block;
  font-size: 14px;
}
.box-center2 span a {
  display: inline-block;

  /* margin: auto; */
}

.box-center2 .el-row .el-col {
  margin: 10px 16px;
  outline: #e6e6e6 1px dotted;
}
.divider-box {
  display: block;
  margin: auto;
  width: 1020px;
}

.box-center1 .el-main {
  margin-top: 60px;
  background: #fff;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  border-bottom: #e6e6e6 1px solid;
  width: 168px;
  height: 224px;
  display: block;
}

.el-carousel .el-image {
  height: 110%;
  width: 110%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-divider__text {
  background: #f5f5f5;
  font-size: 16px;
}
.classify-list {
  outline: #e6e6e6 1px dotted;
}
.classify-list i {
  font-size: 26px;
  line-height: 60px;
}
.classify-list i span {
  font-size: 18px;
  padding: 10px;
}

.el-row-wrap {
  /* height: 586px; */
  /* border: 1px red solid; */
}
</style>

