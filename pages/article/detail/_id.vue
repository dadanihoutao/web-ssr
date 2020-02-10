<template>
    <y-layout>
        <div slot="content">
            <h1>详情id等于 {{ $route.params.id }}</h1>
            <h1>{{ detailData.title }}</h1>
            <h1>{{ detailData.content }}</h1>
        </div>
    </y-layout>
</template>
<script>
export default {
    validate({params}) {
        return /^\d+$/.test(params.id)
    },
    async asyncData({app, params}) {
        let {data} = await app.$axios.get('/api/article/detail/' + params.id)
        return {
            detailData: data.data || {}
        }
    }
}
</script>