import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('es')

Vue.prototype.$dayjs = dayjs