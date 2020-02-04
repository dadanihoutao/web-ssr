<template>
    <div class="list-page">
        <!-- <img src="~static/abc.jpg" alt=""> -->
        {{ name }}
        <ul>
            <li v-for="item in info" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data () {
        return {
            name: '这是请求页面',
            data: {},
            params: {
                page: 1,
                pageSize: 10,
                order: 0,
                categoryId: ''
            }
        }
    },
    created () {
        // console.log(111)
    },
    async asyncData ({app}) {
        // console.log(app)
        const params = {
            page: 1,
            pageSize: 10,
            order: 0,
            categoryId: ''
        }
        let {data} = await app.$axios.get('/api/article/list', {params})
        return {info: data.data || []}
    }
}
</script>
<style lang="less">
.list-page {
    ul li {
        font-size: 20px;
        color: red;
    }
}
</style>
