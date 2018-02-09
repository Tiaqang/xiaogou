var navigator = weex.requireModule('navigator')

export default {
    methods: {
        jump(to) {
            if(this.$router) {
                this.$router.push(to);
            }
            /*navigator.push({
                url: to
            })*/
        },

        back() {
            if (this.$router) {
                this.$router.back();
            }
        }
    }
}