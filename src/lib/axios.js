import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:8888'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'
Vue.use(VueAxios, axios)