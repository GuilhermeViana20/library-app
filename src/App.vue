<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/Default.vue';
import AuthLayout from '@/layouts/Auth.vue';

export default {
  computed: {
    layoutComponent() {
      return this.$route.meta.layout === 'auth' ? AuthLayout : DefaultLayout;
    }
  },
  components: {
    DefaultLayout,
    AuthLayout
  }
};
</script>