var app = new Vue({
    el: '#root',
    data: {
        albums: [],
        selectGenre: '',
        arrayGenre: [],
    },
    methods: {
        filterForGenre: function() {
            this.albums.forEach(element => {
                if (!this.arrayGenre.includes(element.genre)) {
                    this.arrayGenre.push(element.genre)
                }
            });
        }

    },
    mounted() {

        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function(resp) {
                console.log('album ', resp.data.response);
                const album = resp.data.response;
                self.albums = album;
                self.filterForGenre();
            });



    }
});

Vue.config.devtools = true;