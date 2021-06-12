<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a filter title",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhotos: "beautiful-stories"
        },
        {
          title: "This is a filter title",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhotos: "designed-for-everyone"
        }
      ]
    };
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    user() {
      return this.$store.state.user;
    },
  }
};
</script>
