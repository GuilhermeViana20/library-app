<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
      
    <main class="py-5 mt-5">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style></style>