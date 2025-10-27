import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/login_index.vue'
import Register from '@/views/register/register_index.vue'
import Recommend from '@/views/layout/recommand_index.vue'
import SearchIndex from '@/views/layout/search_index.vue'
import SearchResult from '@/views/layout/search_result.vue'
import Match from '@/views/match/match_index.vue'
import Date from '@/views/data/data_index.vue'
import Finished from '@/views/event/event_finished.vue'
import ToStart from '@/views/event/event_to_start.vue'
import Underway from '@/views/event/event_underway.vue'
import SporterScore from '@/views/event/sporter_score.vue'
import TeamScore from '@/views/event/team_score.vue'
import InfoIndex from '@/views/myinfo/info_index.vue'
import MyFollow from '@/views/myinfo/my_follow.vue'
import MyInformation from '@/views/myinfo/my_information.vue'
import MyRating from '@/views/myinfo/my_rating.vue'
import MyHistory from '@/views/myinfo/my_history.vue'
import PasswordChange from '@/views/myinfo/password_change.vue'
import Layout from '@/views/layout'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/login', component: Login}, 
    {path: '/register', component: Register},
    {path: '/', component: Layout,
      redirect:'/recommend',
      children:[
        {path:'/recommend',component:Recommend},
        {path:'/match',component:Match},
        {path:'/data',component:Date},
        {path:'/InfoIndex',component:InfoIndex},
      ]
    },
    {path:'/search',component:SearchIndex},
    {path:'/search_result',component:SearchResult},
    {path:'/finished',component:Finished},
    {path:'/to_start',component:ToStart},
    {path:'/underway',component:Underway},
    {path:'/sporter_score',component:SporterScore},
    {path:'/team_score',component:TeamScore},
    {path:'/my_follow',component:MyFollow},
    {path:'/my_information',component:MyInformation},
    {path:'/my_rating',component:MyRating},
    {path:'/my_history',component:MyHistory},
    {path:'/password_change',component:PasswordChange},
  ],
})

export default router
