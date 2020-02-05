<template>
    <div>
        <!-- <img src="~static/abc.jpg" alt=""> -->
        {{ name }}
        <div>{{ info.name }}</div>
        <div>{{ info.age }}</div>
        <div>{{ info.sex }}</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            name: '这是请求页面',
            data: {}
        }
    },
    async asyncData () {
        let {data} = await axios.get('https://api.myjson.com/bins/111ogg')
        return {info: data}
    }
}
</script>