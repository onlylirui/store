import host from '../pages/ele-host/ele-host.vue'
import gooing from '../pages/ele-gooing/ele-going.vue'
import person from '../pages/ele-person/ele-person.vue'
import shop from '../pages/ele-shop/ele-shop.vue'
import search from '../pages/ele-search/ele-search.vue'
export default [
    {path:"/host",component:host},
    {path:'/gooing',component:gooing},
    {path:'/person',component:person},
    {path:'/shop',component:shop},
    {path:'/search',component:search},
    {path:'/',redirect:'/host'}
]