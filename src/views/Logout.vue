<template>
<div class="container-scroller">
      <div class="main-panel">


        <FlashNews />
        <div class="content-wrapper">
          <div class="container">
            <div class="col-sm-12">
              <h2 class="text-info">
                Thanks for visiting our site. We humbly appreciate.
              </h2>
              <h3>
                Go back to home: <router-link to="/">Home</router-link>
              </h3>
          </div>
        </div>
        </div>
        <!-- main-panel ends -->
        <!-- container-scroller ends -->

        <Footer />
      </div>
    </div>
</template>

<script>
import FlashNews from "@/components/FlashNews";
import Footer from "@/components/Footer";
export default {
  name: "Logout",
  components: {Footer, FlashNews}
}
</script>

<style scoped>

</style>
