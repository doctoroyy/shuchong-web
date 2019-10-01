<template>
  <div class="container">
    <div class="content-read">
      <div class="chapter-control">
        <!-- <router-link class="prev" :to="{name:'ChapterDetail', params:{id:this.$route.params.id, chapterno:parseInt(this.$route.params.chapterno) - 1}}">上一章</router-link> -->
        <div
          class="prev"
          @click="handleClick($event)">
          上一章
        </div>
        <span></span>
        <router-link to="./">目录</router-link>
        <span></span>
        <div
          class="next"
          @click="handleClick($event)">
          下一章
        </div>
        <!-- <router-link class="next" :to="{name:'ChapterDetail', params:{id:this.$route.params.id, chapterno:parseInt(this.$route.params.chapterno) + 1}}">下一章</router-link> -->
      </div>

      <el-card
        v-loading="overlay"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        class="content-wrap">
        <!-- <div
          class="overlay"
          v-show="overlay"
          >正在加载，请稍后...</div> -->
        <div class="chapter-name">
          <h3>{{ this.context.name }}</h3>
        </div>
        <div class="content">
          <p
            v-for="(item, index) in this.context.context"
            :key="index">{{item}}</p>
        </div>
      </el-card>

      <div class="chapter-control">
        <div
          class="prev"
          @click="handleClick($event)">
          上一章
        </div>
        <!-- <router-link class="prev" :to="{name:'ChapterDetail', params:{id:this.$route.params.id, chapterno:parseInt(this.$route.params.chapterno) - 1}}">上一章</router-link> -->
        <span></span>
        <router-link to="./">目录</router-link>
        <span></span>
        <div
          class="next"
          @click="handleClick($event)">
          下一章
        </div>
        <!-- <router-link class="next" :to="{name:'ChapterDetail', params:{id:this.$route.params.id, chapterno:parseInt(this.$route.params.chapterno) + 1}}">下一章</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "ChapterDetail",
  data() {
    return {
      context: null,
      // chapterNo: chapterNo,
      overlay: false,
      // loading: true
    };
  },
  watch:{
    '$route':function(to,from){
     document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  methods: {
    ...mapActions([
      'fetchChapter'
    ]),

    async fetch(id, chapterno) {
      // alert(JSON.stringify(localStorage))
      if (localStorage.getItem(`${id}/${chapterno}`)) {
        return JSON.parse(localStorage.getItem(`${id}/${chapterno}`));
      } else {
        const res = await this.fetchChapter({
          id: id, 
          chapterno: chapterno
        });
        localStorage.setItem(`${id}/${chapterno}`, JSON.stringify(res));
        return res;
      }
    },

    async handleClick(e) {
      const target = e.target;
      const inner = target.innerHTML;
      let flag = 1;
      if (inner.search('下一章') === -1) flag = -1;
      let {id, chapterno} = this.$route.params;
      chapterno = parseInt(chapterno), id = parseInt(id);
      this.overlay = true;
      const res = await this.fetch(id, chapterno + flag);
      if (flag === 1) {
        for (let i = 1; i <= 3; i++) {
          this.fetch(id, chapterno + 1 + i);
        }
      }
      this.overlay = false;
      this.context = res.data;
      this.$router.push({
        name:'ChapterDetail', 
        params:{
          id: id, 
          chapterno: chapterno + flag,
        }
      })
    }
  },

  async mounted() {
    let {id, chapterno} = this.$route.params;
    this.overlay = true;
    chapterno = parseInt(chapterno), id = parseInt(id);
    const res = await this.fetch(id, chapterno);
    for (let i = 1; i <= 3; i++) {
      this.fetch(id, chapterno + i);
    }
    this.overlay = false;
    this.context = res.data;
  },


  
};
</script>
<style scoped>

.overlay {
  position: absolute;
  text-align: center;
  margin: auto;
  width: 980px;
  /* height: 980px; */
  top: 80px;
  left: 150px;

  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
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
}

.content-wrap {
  text-indent: 2em;
  line-height: 255%;
  word-wrap: break-word;
  word-break: break-all;
  border: 1px solid #d8d8d8;
  margin: 0.5em auto;
  font-size: 1.2em;
}
.prev, .next {
  width: 31%;
  height: 70px;
  line-height: 70px;
  text-align: center;
  display: inline-block;
  user-select: none;
}
.prev:hover, .next:hover {
  background: rgba(0, 0, 0, 0.03)
}

</style>


