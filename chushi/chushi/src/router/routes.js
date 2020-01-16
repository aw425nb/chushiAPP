import Index from "../pages/views/index.vue"
import My from "../pages/views/my.vue"
import Classify from "../pages/views/classify.vue"
import Manifest from "../pages/views/manifest.vue"
import Publish from "../pages/views/publish.vue"
import MySupply from "../pages/mySupply"
import Purchase from "../pages/myPurchase"
import Offer from "../pages/myOffer"
import Detail from "../pages/detailPage"



const routes = [{
        path: "/index",
        component: Index,
        meta: { isshow:true }
    },
    {
        path: "/my",
        component: My
    },
    {
        path: "/classify",
        component: Classify
    },
    {
        path: "/manifest",
        component: Manifest,
        meta: { isshow:true }
    },
    {
        path: "/publish",
        component: Publish
    },
    {//我的供应
        path: "/mysupply",
        component: MySupply,
        meta: { isshow:true }
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
    {
        path: "*",
        redirect: "/index"
    }
]

export default routes