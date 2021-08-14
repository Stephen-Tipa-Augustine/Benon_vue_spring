<template>
<div class="container-scroller">
  <TopNavBar />

  <FlashNews />
    <div class="content-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="card" data-aos="fade-up">
              <div class="card-body">
                <div class="aboutus-wrapper">
                  <h1 class="mt-5 text-center mb-5">
                    Contact Us
                  </h1>
                  <div class="row">
                    <div class="col-lg-12 mb-5 mb-sm-2">
                      <form @submit.prevent="contact">
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="form-group">
                              <textarea
                                class="form-control textarea"
                                placeholder="Comment *"
                                id="message"
                                v-model="form.message"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                id="name"
                                aria-describedby="name"
                                placeholder="Name *"
                                v-model="form.name"
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                id="email"
                                aria-describedby="email"
                                placeholder="Email *"
                                v-model="form.email"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-12">
                            <div class="form-group">
                              <button
                                type="submit"
                                class="btn btn-lg btn-dark font-weight-bold mt-3"
                                >Send Message</button
                              >
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </div>
    <!-- container-scroller ends -->
</template>

<script>
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import FlashNews from "@/components/FlashNews";
export default {
name: "Contact",
  data() {
  return {
    user: null,
    header: null,
    form: {
      name: '',
      email: '',
      message: ''
    },
  }
  },
  components: {FlashNews, Footer, TopNavBar},
  created() {
  this.user = JSON.parse(localStorage.getItem('user'));
  this.header = { headers: { 'Authorization': `Bearer ${this.user.accessToken}` } }
  },
  methods: {
  contact () {
    this.axios.post('http://localhost:9000/api/services/receive-message', this.form, this.header)
          .then((res) => {
               //Perform Success Action
            console.log(res.data)
            this.$router.replace({ name: 'Success' });
           })
           .catch((error) => {
               // error.response.status Check status code
             console.log(error.message)
           }).finally(() => {
               //Perform action in always
              console.log('axios successfully invoked')
              this.registering = false
           });
  }
  }
}
</script>

<style scoped>

</style>
