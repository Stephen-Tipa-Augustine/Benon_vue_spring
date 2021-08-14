<template>
<div>
  <div v-if="error" class="alert alert-danger">{{error}}</div>
    <!-- login form -->
    <form @submit.prevent="logout" class="user">
      <input type="submit" value="Logout" class="btn btn-info btn-user btn-block">

      <!-- Modal to show the loading effect during login -->
      <div class="modal align-content-center" id="modal">
          <div class="modal-content">
            <div style="width: 100%; display: block;">
              <div style="text-align: center">
                <div class="spinner-border text-success" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-info" v-if="loggedIn">
              Login successful! Close this modal to explore.
            </p>
          </div>
        </div>
      </div>
    </form>
</div>
</template>

<script>
export default {
  name: "LogoutModal",
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$emit('logged-out')
      this.$router.replace({ name: 'Logout' });
    }
  }
}
</script>

<style scoped>

</style>
