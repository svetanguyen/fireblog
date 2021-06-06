<template>
  <header>
      <nav class="container">
          <div class="branding">
              <router-link class="header" :to="{name: Home}">FireBlogs</router-link>
          </div>
          <div class="nav-links">
              <ul>
                  <router-links class="link" to="#">Home</router-links>
                  <router-links class="link" to="#">Blogs</router-links>
                  <router-links class="link" to="#">Create Post</router-links>
                  <router-links class="link" to="#">Login/Register</router-links>
              </ul>
          </div>
      </nav>
      <menuIcon />
      <transition name="mobile-nav">
        <ul>
            <router-links class="link" to="#">Home</router-links>
            <router-links class="link" to="#">Blogs</router-links>
            <router-links class="link" to="#">Create Post</router-links>
            <router-links class="link" to="#">Login/Register</router-links>
        </ul>
      </transition>
  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
export default {
    name: 'navigation',
    components: {
        menuIcon
    }
}
</script>

<style lang="scss" scoped>
    header {
       background: #fff;
       padding: 0 25px;
       box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
       z-index: 99;
    }
</style>