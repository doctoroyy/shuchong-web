<template>
  <div class="book-detail-container">
    <base-header />
    <section class="detail-main">
      <base-info :data="catalogInfo.bookInfo"/>
      <catalog :data="catalogInfo.chapters"/>
    </section>
    <Footer/>
  </div>
</template>

<script>
import BaseHeader from "../../components/BaseHeader";
import BaseInfo from "./BaseInfo";
import Catalog from "./Catalog";
import {mapGetters, mapActions} from 'vuex';
import Footer from "../../components/BaseFooter";

export default {
  name: "BookDetail",

  components: {
    BaseHeader,
    BaseInfo,
    Catalog,
    Footer,
  },
  data() {
    return {
      catalogInfo: null,
    };
  },

  props: {
    imgSrc: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  async mounted() {
    alert(document.body.clientWidth);
    const { id } = this.$route.params;
    const res = await this.fetchBookCatalog(id);
    this.catalogInfo = res.data;  
  },

  methods: {
    ...mapActions([
      'fetchBookCatalog',
    ])
  },

  computed: {
    getBookInfo() {
      
    }
  }
};
</script>

<style lang="less" scoped>
.book-detail-container {
    // border: 1px red solid;
    min-width: 900px;
    .detail-main {
    width: 80%;
    min-width: 800px;
    margin: 40px auto 0 auto;
    // border: 1px red solid;
  }
}

</style>