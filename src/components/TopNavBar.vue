<template>
<!-- partial:../partials/_navbar.html -->
  <header id="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="navbar-top">
          <div class="d-flex justify-content-between align-items-center">
            <ul class="navbar-top-left-menu">
              <li class="nav-item">
                <a href="/about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" data-toggle="modal" data-target="#add-news" v-if="isAdmin">Write for Us</a>
              </li>
            </ul>
            <ul class="navbar-top-right-menu">
              <li class="nav-item">
                <a href="#" class="nav-link"><i class="mdi mdi-magnify"></i></a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" data-toggle="modal" data-target="#login" v-if="!auth">Login</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" data-toggle="modal" data-target="#register" v-if="!auth">Sign up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="logout()" v-if="auth">Logout</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="login" role="dialog">
          <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title text-secondary" style="text-align: left;">Login Now</h3>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <LoginForm v-on:logged-in="initialize" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="add-news" role="dialog">
          <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title text-secondary" style="text-align: left;">What is happening?</h3>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <NewsForm :user="user" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="register" role="dialog">
          <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title text-secondary" style="text-align: left;">Register Now</h3>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <RegisterForm v-on:registerd="initialize" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>


          </div>
        </div>


        <div class="navbar-bottom">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <a class="navbar-brand" href="#"
                ><img src="../assets/images/logo.svg" alt=""
              /></a>
            </div>
            <div>
              <button
                class="navbar-toggler"
                type="button"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="navbar-collapse justify-content-center collapse"
                id="navbarSupportedContent"
              >
                <ul
                  class="navbar-nav d-lg-flex justify-content-between align-items-center"
                >
                  <li>
                    <button class="navbar-close">
                      <i class="mdi mdi-close"></i>
                    </button>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/business" v-if="auth">Business</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/sports" v-if="auth">Sports</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/art" v-if="auth">Art</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/politics" v-if="auth">POLITICS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/travel" v-if="auth">Travel</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="social-media">
              <li>
                <a href="#">
                  <i class="mdi mdi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="mdi mdi-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="mdi mdi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- partial -->
</template>

<script>
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import NewsForm from "@/components/NewsForm";
export default {
  name: "TopNavBar",
  data() {
    return {
      isAdmin: false,
      user: null,
      auth: false
    }
  },
  created() {
    this.initialize()
  },
  components: {NewsForm, LoginForm, RegisterForm},
  methods: {
    initialize() {
      this.user = JSON.parse(localStorage.getItem('user'));
      if (this.user != null) {
        this.auth = (this.user.accessToken != null);
        this.user.roles.forEach((role) => {
        if (role === 'ROLE_ADMIN') {
          this.isAdmin = true
        }
      });
      }
    },
    logout() {
      console.log('logged out');
      localStorage.removeItem('user');
      this.initialize()
      this.$router.replace({ name: 'Logout' });
    }
  },
}
</script>

<style scoped>

</style>
