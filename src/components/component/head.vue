<template>
    <div>
        <div class="div">
            <text class="div-text">{{headline}}</text>
        </div>
        <div class="icon-left" v-if="showleft">
            <text @click="goback" class="icon">&#xe685;</text>
        </div>
    </div>

</template>

<script>
    export default {
        name: "head",

        beforeCreate () {
            const dom = weex.requireModule('dom');
            dom.addRule('fontFace',{
                'fontFamily': 'iconfont',
                'src': "url('http://at.alicdn.com/t/font_568553_5djox5kp2yphkt9.ttf')"
            })
        },

        props: {
            headline: {
                type: String,
                default: '登陆'
            },
            showleft: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            goback () {
                var navigator = weex.requireModule('navigator');
                navigator.pop({
                    animated: 'true'
                })
            }
        }
    }
</script>

<style scoped>

    .div{
        width: 750px;
        height: 88px;
        background-color: #00B4FF;
        justify-content: center;
        align-items: center;
    }
    .icon-left{
        position: absolute;
        width: 100px;
        height: 88px;
        justify-content: center;
        align-items: center;
    }
    .icon{
        font-family: iconfont;
        width: 50px;
        height: 50px;
        font-size: 40px;
        color: white;
    }
    .icon-right{
        position: absolute;
        width: 100px;
        height: 88px;
        justify-content: center;
        align-items: center;
        right: 0;
        top: 0;
    }
    .div-text{
        color: white;
    }
</style>