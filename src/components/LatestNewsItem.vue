<template>
<div class="row">
    <div class="col-sm-12">
      <div class="border-bottom pb-4 pt-4">
        <div class="row">
          <div class="col-sm-8">
            <h5 class="font-weight-600 mb-1">
              {{item.overview}}
            </h5>
            <p class="fs-13 text-muted mb-0">
              <span class="mr-2">Photo </span>{{item.time}}
            </p>
          </div>
          <div class="col-sm-4">
            <div class="rotate-img">
              <img
                :src="item.imageURL"
                alt="banner"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "LatestNewsItem",
  props: {
  item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
}
</script>

<style scoped>

</style>
