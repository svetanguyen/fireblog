<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCards from '../components/BlogCard.vue';
export default {
  name: "Home",
  components: {BlogPost,BlogCards},
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
      ],
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021" },
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021" },
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021" },
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

<style lang="scss" scoped>
  .blog-card-wrap {
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
</style>