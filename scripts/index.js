const chuck = new Vue({
  el: '#chuck',

  data: {
    randJoke: "",
    allJokes: [],
    chuckPic: ""
  },

  methods: {

    getRandomJoke: function() {
      axios.get("https://api.chucknorris.io/jokes/random").then(response => {
      this.randJoke = response.data.value;
      this.chuckPic = response.data.icon_url;
      });
    },

    // ALTERNATIVE API
    // getRandomJoke: function() {
    //   axios.get("http://api.icndb.com/jokes/random").then(response => {
    //     this.randJoke = response.data.value.joke;
    //   });
    // },

    getAllJokes: function() {
      axios.get("https://api.icndb.com/jokes").then(response => {
        this.allJokes = response.data.value;
      });
    }
  },

  created() {
    this.getRandomJoke();
    setInterval(this.getRandomJoke, 15000);
  }
})
