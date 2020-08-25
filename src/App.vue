
<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="!$route.meta.showFooter"/>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
       
        name: 'App',
        components: {
           FooterGuide 
        },
        props: {
            
        },
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        watch: {
            
        },
        created() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    
</style>
