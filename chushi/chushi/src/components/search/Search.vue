<template>
    <div id="search">
        <div class="search-top">
            <!-- 后退箭头 -->
            <van-icon name="arrow-left" />
            <SearchBox/>
        </div>
        <div class="menu"><DropMenu/></div>
    </div>
</template>

<script>
//引入搜索框
import SearchBox from "./SearchBox.vue"
import DropMenu from "./DropMenu.vue"
export default {
    data(){
        return {
            
        }
    },
    components:{
        SearchBox,
        DropMenu,
    }
}
</script>


<style lang="stylus" scoped>
#search
    display flex
    flex-direction column
    height 100%
    width 100%
    .search-top
        width 100%
        padding .05rem .1rem
        display flex
        justify-content center
        align-items center
.menu 
    width 100%
    height .5rem

</style>