import Index from "../pages/views/index.vue"
import My from "../pages/views/my.vue"
import Classify from "../pages/views/classify.vue"
import Manifest from "../pages/views/manifest.vue"
import Publish from "../pages/views/publish.vue"
import MySupply from "../pages/mySupply"
import Purchase from "../pages/myPurchase"
import Offer from "../pages/myOffer"
import Detail from "../pages/detailPage"
import Search from "../pages/search/Search.vue"



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
    {
        path: "/publish",
        component: Publish
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
    {
        path: "*",
        redirect: "/index"
    }
]

export default routes