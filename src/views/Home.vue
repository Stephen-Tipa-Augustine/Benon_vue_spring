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
                        TRENDING NOW
                      </h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">

<!--                      normal news goes here-->
                      <div class="justify-content-center" v-for="(item, i) in newsList" :key="i">
                        <NewsItem :item="item" />
                      </div>
                      <p class="text-info" v-if="newsList.length === 0">
                        Sorry! We have no news to display
                      </p>

                    </div>
                    <div class="col-lg-4">
                      <h2 class="mb-4 text-primary font-weight-600">
                        Latest news
                      </h2>

<!--                      latest news goes here-->
                      <div class="justify-content-center" v-for="(item, i) in latestNews" :key="i">
                        <LatestNewsItem :item="item" />
                      </div>

                      <p class="text-info" v-if="latestNews.length === 0">
                        Sorry! We have no news to display
                      </p>

                      <div class="trending">
                        <h2 class="mb-4 text-primary font-weight-600">
                          Trending
                        </h2>
                        <div class="mb-4">
                          <div class="rotate-img">
                            <img
                              src="../assets/images/business/business_4.png"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                          <h3 class="mt-3 font-weight-600">
                            Virus Kills Member Of Advising Iran’s Supreme
                          </h3>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">Photo </span>10 Minutes ago
                          </p>
                        </div>
                        <div class="mb-4">
                          <div class="rotate-img">
                            <img
                              src="../assets/images/business/business_5.png"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                          <h3 class="mt-3 font-weight-600">
                            Virus Kills Member Of Advising Iran’s Supreme
                          </h3>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">Photo </span>10 Minutes ago
                          </p>
                        </div>
                        <div class="mb-4">
                          <div class="rotate-img">
                            <img
                              src="../assets/images/business/business_6.png"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                          <h3 class="mt-3 font-weight-600">
                            Virus Kills Member Of Advising Iran’s Supreme
                          </h3>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">Photo </span>10 Minutes ago
                          </p>
                        </div>
                      </div>
                    </div>
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
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import FlashNews from "@/components/FlashNews";
import LatestNewsItem from "@/components/LatestNewsItem";
import NewsItem from "@/components/NewsItem";
export default {
  name: 'Home',
  components: {NewsItem, LatestNewsItem, FlashNews, TopNavBar, Footer},
  data() {
    return {
      user: null,
      newsList: [],
      latestNews: []
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
          let i = 0;
          if (response.data != null) {
            this.newsList = [];
            this.latestNews = [];
            response.data.forEach((value) => {
              this.newsList.push(value);
              console.log(value);
              if (i < 5) {
                this.latestNews.push(value);
              }
              i += 1;
            })
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
