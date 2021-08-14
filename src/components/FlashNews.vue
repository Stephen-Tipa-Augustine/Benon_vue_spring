<template>
<div class="flash-news-banner">
      <div class="container">
        <div class="d-lg-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <span class="badge badge-dark mr-3">Flash news</span>
            <p class="mb-0">
              {{item.overview}}
            </p>
          </div>
          <div class="d-flex">
            <span class="mr-3 text-danger">{{dateTime}}</span>
            <span class="text-danger">30°C,Kampala</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "FlashNews",
  data() {
    return {
      user: null,
      item: null,
      dateTime: (new Date()).toDateString(),
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'));
    setInterval(this.getNews, 3000)
  },
  methods: {
    getNews() {
      if (this.user == null) {
        return;
      }
      this.axios.get('http://localhost:9000/api/services/news-listing',
          {
                  headers: {
                    'Authorization': `Bearer ${this.user.accessToken}`
                  }
                }
      ).then((response) => {
        try {
           console.log(response.data)
          if (response.data != null && response.data.length !== 0) {
            this.item = response.data[response.data.length - 1];
          }
        } catch (e) {
          console.log(response)
          console.log(e.message)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
