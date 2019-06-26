<template>
  <div class="c-center">
    <el-container class="box-center1">
      <el-aside width="20%">
        <div class="classify-list">
          <i class="el-icon-menu">
            <span>作品分类</span>
          </i>
          <el-row v-for="i in 6" :key="i">
            <el-col :span="6" v-for="j in 2" :key="j">
              <a href="#">{{tags_name[(i - 1) * 2 + j-1]}}</a>
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
        <i class="el-icon-folder">全部小说</i>
      </el-divider>
    </div>
    <div class="box-center2">
      <el-row>
        <el-col :span="4" v-for="o in 5" :key="o">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="storage_book[o-1].src" class="image">
            <div style="padding: 8px;">
              <span>
                {{storage_book[o-1].name}} /
                <a href="#">
                  <el-tag type="info">作者：</el-tag>
                </a>
              </span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "box_center",
  data() {
    return {
      tags_name: [
        "玄幻",
        "奇幻",
        "武侠",
        "仙侠",
        "都市",
        "现实",
        "军事",
        "历史",
        "游戏",
        "体育",
        "科幻",
        "悬疑灵异",
        "女生网",
        "轻小说"
      ],
      img_url: [
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/da505b7f0abfdd6fac6d8bdad81ddc03.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/2b538ec521660989b692bd189066c767.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/a5750a52de8d80697623824150ce3583.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/e4dfdb58b3f1d5d673b2e7fcc9ca9ee5.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/f4a932942cc7d88713e649eee396471a.jpg"
      ],
      storage_book: [
        {
          src: "https://www.xbiquge6.com/cover/78/78513/78513s.jpg",
          name: "元尊"
        },
        {
          src: "https://www.xbiquge6.com/cover/20/20331/20331s.jpg",
          name: "万古神帝"
        },
        {
          src: "https://www.xbiquge6.com/cover/9/9208/9208s.jpg",
          name: "伏天氏"
        },
        {
          src: "https://www.xbiquge6.com/cover/8/8109/8109s.jpg",
          name: "帝霸"
        },
        {
          src: "https://www.xbiquge6.com/cover/0/576/576s.jpg",
          name: "无敌天下"
        },
        {
          src: "https://www.xbiquge6.com/cover/34/34822/34822s.jpg",
          name: "三寸人间"
        },
        {
          src: "https://www.xbiquge6.com/cover/3/3482/3482s.jpg",
          name: "俗人回档"
        },
        {
          src: "https://www.xbiquge6.com/cover/76/76306/76306s.jpg",
          name: "寒门枭士"
        },
        {
          src: "https://www.xbiquge6.com/cover/20/20339/20339s.jpg",
          name: "茅山捉鬼人"
        },
        {
          src: "https://www.xbiquge6.com/cover/12/12267/12267s.jpg",
          name: "重生之最强剑神"
        }
      ]
    };
  }
};
</script>
<style scoped>
.c-center {
  width: 100%;
  background: #f5f5f5;
}
.box-center1 {
  background: #fff;
  width: 1020px;
  height: auto;
  margin: 20px auto 20px auto;
}
.box-center1 .el-aside {
  background: #f7f7f7;
}

.box-center1 .el-row .el-col {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: #f7f7f7 1px solid;
  width: 100px;
  height: 60px;
  font-size: 16px;

  /* border: red 1px solid; */
  text-align: center;
}
.box-center1 .el-row .el-col a {
  line-height: 60px;
  text-decoration: none;
  color: inherit;
}
.box-center2 {
  padding: 10px;
  text-align: center;
}
.box-center2 .el-row .el-col {
  margin: 10px 16px;
}
.divider-box {
  display: block;
  margin: auto;
  width: 1020px;
}

.box-center1 .el-main {
  color: #333;
  text-align: center;
}

.box-center2 {
  background: #fff;
  width: 1020px;
  margin: 20px auto 20px auto;
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
  border-bottom: #f5f5f5 1px solid;
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


.classify-list {
  border: #f7f7f7 2px solid;
}
.classify-list i {
  font-size: 26px;
  line-height: 60px;
  background: #f7f7f7;
}
.classify-list i span {
  font-size: 18px;
  padding: 10px;
}
</style>

