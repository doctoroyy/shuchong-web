<template>
  <div>
    <Header/>
    <p>{{tags}}</p>
  </div>
  
  
</template>

<script>
import Header from './Header'
export default {
  props:['tags'],
  name: "book_info",
  data() {
    return {
    };
  },
  components: {
    Header
  }
};
</script>

