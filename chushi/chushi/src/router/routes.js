import Index from "../pages/views/index.vue"
import My from "../pages/views/my.vue"
import Classify from "../pages/views/classify.vue"
import Manifest from "../pages/views/manifest.vue"
import MySupply from "../pages/mySupply"
import Purchase from "../pages/myPurchase"
import Offer from "../pages/myOffer"
import Detail from "../pages/detailPage"
import Search from "../components/search/Search.vue"

// 引入发布供应和发布采购组件
import PostPurchase from "../pages/publish/PostPurchase.vue"
import ReleaseSupply from "../pages/publish/ReleaseSupply.vue"

const routes = [{
        path: "/index",
        component: Index,
        meta: { footerShow:true }
    },
    {
        path: "/my",
        component: My,
        meta: { footerShow:true }
    },
    {
        path: "/classify",
        component: Classify,
        meta: { footerShow:true }
    },
    {
        path: "/manifest",
        component: Manifest,
        meta: { footerShow:true }
    },
    {//我的供应
        path: "/mysupply",
        component: MySupply,
    },
    {//我的采购
        path: "/mypurchase",
        component: Purchase
    },
    {//我的报价
        path: "/myoffer",
        component: Offer
    },
    {//详情页
        path: "/detail",
        component: Detail
    },
    {//搜索页
        path:'/search',
        component:Search
    },
    {//发布采购
        path:'/PostPurchase',
        component:PostPurchase
    },
    {//发布供应
        path:'/ReleaseSupply',
        component:ReleaseSupply
    },
    {
        path: "*",
        redirect: "/index"
    }
]

export default routes