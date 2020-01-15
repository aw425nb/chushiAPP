import Index  from "../pages/views/index.vue"
import My  from "../pages/views/my.vue"
import Classify  from "../pages/views/classify.vue"
import Manifest  from "../pages/views/manifest.vue"
import Publish  from "../pages/views/publish.vue"



const routes = [{
    path:"/index",
    component:Index
},{
    path:"/my",
    component:My
},{
    path:"/classify",
    component:Classify
},{
    path:"/manifest",
    component:Manifest
},{
    path:"/publish",
    component:Publish
},{
    path:"*",
    redirect:"/index"
}]

export default routes