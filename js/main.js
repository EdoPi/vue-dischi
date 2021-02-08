var app = new Vue({
    el: '#root',
    data: {
        albums: [],
        selectGenre: '',
    },
    methods: {
        filterForYear: function() {

        }

    },
    mounted() {

        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function(resp) {
                console.log('album ', resp.data.response);
                const album = resp.data.response;
                self.albums = album;
            });



    }
});

Vue.config.devtools = true;