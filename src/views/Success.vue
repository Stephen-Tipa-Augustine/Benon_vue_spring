<template>
<div class="container-scroller">
      <div class="main-panel">

<!--        Top nav Bar starts here-->
      <TopNavBar />
<!--        Top nav bar stops here-->

        <FlashNews />
        <div class="content-wrapper">
          <div class="container">
            <div class="col-sm-12">
              <div class="card" data-aos="fade-up">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="font-weight-600 mb-4">
                        Ah!
                      </h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="text-info">
                        Congrats! Your response has successfully been recorded.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
import TopNavBar from "@/components/TopNavBar";
import FlashNews from "@/components/FlashNews";
export default {
name: "Success",
  components: {FlashNews, TopNavBar}
}
</script>

<style scoped>

</style>
