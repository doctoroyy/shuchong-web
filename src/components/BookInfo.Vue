<template>
  <div>
    <!-- <Header/> -->
    <p>{{books[this.$route.params.id]}}</p>
  </div>
  
  
</template>

<script>
import Header from './Header'
export default {
  name: "book_info",
  data() {
    return {
      tags: this.$store.state.tags,
      books: this.$store.state.books,
    };
  },
  components: {
    Header
  }
};
</script>

