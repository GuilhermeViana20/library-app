<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main class="py-5 mt-5">
      <router-view></router-view>
    </main>
  </div>
</template>
  
  <script>
import Navbar from "@/components/Navbar";

export default {
  name: "Default",
  components: {
    Navbar,
  },
};
</script>
  
  <style></style>