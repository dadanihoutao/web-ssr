<template>
    <y-layout>
        <div slot="content">
            <!-- <span class="iconfont icon-dengdaiqueren"></span> -->
            <div class="article-list">
                <div class="left-box">
                    <ul class="list" v-if="Array.isArray(listData) && listData.length">
                        <li v-for="item in listData" :key="item.id">
                            <div class="left-img">
                                <img v-if="item.cover" :src="item.cover" alt="">
                                <img v-else :src="defaultImg" alt="">
                            </div>
                            <div class="right-text">
                                <h2>{{ item.title }}</h2>
                                <p>文章内容一部分</p>
                                <div class="labels">
                                    <span class="label">{{ item.category_name }}</span>
                                    <span>
                                        <Icon class="icons" type="ios-person-outline" />
                                        {{ item.author }}
                                    </span>
                                    <span>
                                        <Icon class="icons" type="ios-eye-outline" />
                                        {{ item.browse }}
                                    </span>
                                    <span>
                                        <Icon class="icons" type="ios-text-outline" />
                                        {{ item.comments_sum }}
                                    </span>
                                    <span>
                                        <Icon class="icons" type="ios-time-outline" />
                                        {{ item.created_at }}
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="list-footer">
                        <Page :total="total" :current="page" :page-size="pageSize" show-total show-elevator @on-change="changePage"></Page>
                    </div>
                </div>
                <div class="right-box">
                    <Affix :offset-top="95">
                        <div class="classfiy">
                            <div class="header">
                                <h2>文章分类</h2>
                            </div>
                            <ul class="list">
                                <li v-for="item in categoryList" :key="item.id"><Button type="text">{{ item.name }}（{{ item.category_sum }}）</Button></li>
                            </ul>
                        </div>
                        <div class="link-list">
                            <div class="header">
                                <h2>外部链接</h2>
                            </div>
                            <ul class="list">
                                <li v-for="(item, index) in linkList" :key="index"><Button @click="openLink(item.link)" type="text">{{ item.name }}</Button></li>
                            </ul>
                        </div>
                    </Affix>
                </div>
            </div>
        </div>
    </y-layout>
</template>
<script>
import linkList from '@/data/link.json'
export default {
    data () {
        return {
            defaultImg: require('@/assets/images/defaultImg.jpg'),
            linkList: linkList,
            total: 0,
            page: 1,
            pageSize: 10,
            order: 0
        }
    },
    async asyncData ({app}) {
        let params = {
            page: 1,
            pageSize: 10,
            order: 0,
            categoryId: '',
            searchVal: ''
        }
        // let {data} = await app.$axios.get('/api/article/list', {params})
        // // console.log(data)
        // if (data.code === 200) {
        //     return { listData: data.data }
        // }
        // let result = (await app.$axios.get('/api/category/list')).data
        let [ data1, data2 ] = await Promise.all([
            app.$axios.get('/api/article/list', {params}),
            app.$axios.get('/api/category/list')
        ])
        return {
            listData: data1.data.data || [],
            categoryList: data2.data.data || []
        }
        // console.log(result)
        // console.log(data)
        // this.$get('/api/article/list', params).then(res => {
        //     if (res.code === 200) {
        //         this.listData = res.data
        //         this.total = res.page.total
        //         this.page = res.page.curPage
        //     } else {
        //         this.$Message.error(res.msg)
        //     }
        // })
    },
    methods: {
        changePage (page) {
            console.log(page)
        }
    }
}
</script>
<style lang="less">
.article-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left-box {
        width: 800px;
        .list li {
            width: 100%;
            padding: 20px;
            height: 220px;
            margin-bottom: 15px;
            background-color: rgba(255,255,255,.5);
            box-shadow: 0px 0px 6px rgba(63,74,105,.16);
            border-radius: 3px;
            display: flex;
            .left-img {
                width: 270px;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .right-text {
                width: calc(100% - 290px);
                margin-left: 20px;
                h2 {
                    font-size: 18px;
                    color: #666666;
                    width: 100%;
                    overflow: hidden;
                    cursor: pointer;
                    border-bottom: 1px solid #e6e6e6;
                    padding: 0 0 10px 0;
                    &:hover {
                        color: #409EFF;
                    }
                }
                p {
                    font-size: 14px;
                    padding: 10px 0;
                    height: 100px;
                    overflow: hidden;
                }
                .labels {
                    .label {
                        display: inline-block;
                        padding: 0 20px;
                        height: 20px;
                        line-height: 20px;
                        border-radius: 10px;
                        background: rgba(51, 119, 255, 0.1);
                        color: #409EFF;
                        margin-left: 0;
                    }
                    span {
                        color: #9ea7b4;
                        margin: 0 5px;
                        .icons {
                            font-size: 18px;
                        }
                        margin-top: 27px;
                    }
                }
            }
        }
        .list-footer {
            width: 100%;
            text-align: center;
            padding: 0 0 5px 0;
        }
    }
    .right-box {
        width: 285px;
        .classfiy, .link-list {
            width: 100%;
            background-color: rgba(255,255,255,.5);
            box-shadow: 0px 0px 6px rgba(63,74,105,.16);
            border-radius: 3px;
            margin-bottom: 15px;
            padding: 0 15px 8px;
            .header {
                border-bottom: 1px solid #e6e6e6;
                h2 {
                    font-size: 18px;
                    height: 44px;
                    line-height: 44px;
                    border-bottom: 1px solid #666666;
                    display: inline-block;
                    transform: translateY(1px);
                }
            }
            .list {
                padding: 10px 0 0 0;
                li {
                    padding: 5px 0;
                    button {
                        padding: 0;
                    }
                }
            }
        }
    }
}
</style>