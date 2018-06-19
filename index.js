const chuck = new Vue({
  el: '#chuck',

  data: {
    randJoke: "",
    allJokes: []
  },

  methods: {

    getRandomJoke: function() {
      axios.get("https://api.chucknorris.io/jokes/random").then(response => {
        this.randJoke = response.data.value;
        console.log(this.randJoke);
      });
    },
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
