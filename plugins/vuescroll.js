import Vue from 'vue'
import vuescroll from 'vuescroll'
Vue.use(vuescroll, {
    ops: {
        scrollPanel: {
            initialScrollY: 0,
            initialScrollX: 0,
            scrollingX: false
        },
        bar: {
            background: '#ddd'
        }
    }
})