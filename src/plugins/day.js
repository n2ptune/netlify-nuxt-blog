import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

Vue.prototype.$dayjs = dayjs