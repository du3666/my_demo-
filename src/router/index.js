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


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/login', component: Login}, 
    {path: '/register', component: Register},
    {path: '/', component: Recommend},
  ],
})

export default router
