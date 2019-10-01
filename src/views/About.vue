
<template>
  <div class="about-container">
    <base-header/>
    <section>
      <h1>This is a About Page.</h1>
    </section>
    <Footer/>
  </div>
  
</template>

<script>
import BaseHeader from '../components/BaseHeader';
import Footer from "../components/BaseFooter";

export default {
  name: 'About',
  components: {
    BaseHeader,
    Footer,
  }
}
</script>

<style>

</style>