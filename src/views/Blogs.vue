<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle editing post</span>
        <input type="checkbox" v-model="editPost">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "blogs"
}
</script>

<style>

</style>