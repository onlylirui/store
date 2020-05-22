import host from '../pages/ele-host/ele-host.vue'
import gooing from '../pages/ele-gooing/ele-going.vue'
import person from '../pages/ele-person/ele-person.vue'
import shop from '../pages/ele-shop/ele-shop.vue'
import search from '../pages/ele-search/ele-search.vue'
import login from '../pages/ele-login/ele-login.vue'
import input from '../pages/ele-input/ele-input.vue'
export default [
    {path:"/host",component:host,name:"host",meta:{showFooter:true,count:0}},
    {path:'/gooing',component:gooing,name:'gooing',meta:{showFooter:true,count:3}},
    {path:'/person',component:person,name:'person',meta:{showFooter:true,count:4}},
    {path:'/shop',component:shop,name:'shop',meta:{showFooter:true,count:2}},
    {path:'/search',component:search,name:'search',meta:{showFooter:true,count:1}},
    {path:'/login',component:login,props:true,meta:{showFooter:false}},
    {path:'/input',component:input,meta:{showFooter:false}},
    {path:'/',redirect:'/host'}
]