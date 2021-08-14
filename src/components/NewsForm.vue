<template>
<div>
  <div v-if="error" class="alert alert-danger">{{error}}</div>
    <!-- login form -->
    <form @submit.prevent="addNews" class="user">
      <div class="form-group">
        <label>News overview
          <input type="text" class="form-control form-control-user" placeholder="e.g Stevens mission" required v-model="form.overview">
        </label>
      </div>
      <div class="form-group">
        <label>Time
          <input type="text" class="form-control form-control-user" placeholder="e.g 10:00Pm" required autofocus v-model="form.time">
        </label>
      </div>
      <div class="form-group">
        <label>Category
          <select name="category" id="category" class="form-control" required v-model="form.category">
            <option value="" disabled>Choose</option>
            <option value="Art">Art</option>
            <option value="Business">Business</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
          </select>
        </label>
      </div>
      <div class="form-group">
        <label>News Image
          <input type="text" class="form-control" placeholder="e.g http://.../image.png" required v-model="form.imageURL">
        </label>
      </div>
      <div class="form-group">
        <label>News Details
          <textarea class="form-control " placeholder="Details *" required v-model="form.detail"></textarea>
        </label>
      </div>

      <button type="submit"
        class="btn btn-info btn-user btn-block" style="margin-top: 10px">
          <span>
            <p style="text-align: center; display: inline; font-size: large">
              Submit
            </p>
            <div style="display: inline; margin-left: 100px" v-if="registering">
              <div class="spinner-border text-white"
                   role="status" style="margin: auto">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </span>
        </button>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-info" v-if="registered">
              News added! Close this modal and view it in listing.
            </p>
          </div>
        </div>
      </div>
    </form>
</div>
</template>

<script>
export default {
name: "NewsForm",
  data() {
    return {
      form: {
        overview: '',
        detail: '',
        time: '',
        category: '',
        imageURL: '',
      },
      registering: false,
      registered: false,
      error: null,
    };
  },
  props: {
  user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    loadingModal() {
      const modal = document.getElementById('modal');
      modal.style.display = 'block';
      // When the user clicks anywhere outside of the modal, close it
      // eslint-disable-next-line func-names
      window.onclick = function (event) {
        // eslint-disable-next-line eqeqeq
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    },
    addNews() {
      this.registering = true;
      this.axios.post('http://localhost:9000/api/services/add-news', this.form,
              {
                  headers: {
                    'Authorization': `Bearer ${this.user.accessToken}`
                  }
                })
          .then((res) => {
               //Perform Success Action
            console.log(res.data)
            this.registered = true;
            if (res.data.message === 'News added successfully!') {
              console.log('News added, close this modal')
              this.registered = true;
            }
           })
           .catch((error) => {
               // error.response.status Check status code
             console.log(error.message)
           }).finally(() => {
               //Perform action in always
              console.log('axios successfully invoked')
              this.registering = false
           });
    },
  },
}
</script>

<style scoped>
#signup-container{
  margin-top: 20px;
}
#signup-btn{
  display: inline;
  color: blue;
  cursor: pointer;
  text-underline: blue;
}
#signup-btn:hover{
  color: deepskyblue;
  text-shadow: #6b6d7d;
}
#notice{
  font-size: smaller;
  color: saddlebrown;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  margin: auto;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: fit-content;
  vertical-align: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
