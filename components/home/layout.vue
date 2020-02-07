<template>
    <div class="layout">
        <div class="bg"></div>
        <div class="layout-header">
            <div class="header-wrap">
                <h3>博客频道</h3>
                <ul>
                    <li class="active"><nuxt-link to="/">首页</nuxt-link></li>
                    <li><a>最新</a></li>
                    <li><a>最热</a></li>
                    <li><nuxt-link to="/about">关于</nuxt-link></li>
                </ul>
                <div class="search-input">
                    <Input placeholder="请输入搜索内容" size="large">
                        <Icon type="ios-search" slot="prefix" />
                    </Input>
                </div>
            </div>
        </div>
        <div class="layout-content">
            <!-- <vue-scroll>
                <slot name="content"></slot>
            </vue-scroll> -->
            <slot name="content"></slot>
        </div>
        <div class="layout-footer">
            <div class="footer-wrap">
                <p>www.lokiblog.com - 博客频道 Copyright© Author阿洋 851051279@qq.com</p>
                <p>浙ICP备19028749</p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.layout {
    width: 100%;
    height: 100%;
    .bg {
        width: 100%;
        height: 100%;
        position: fixed;
        background: url('../../assets/images/skyblue.jpg') no-repeat;
        background-size: 100%;
        z-index: -1;
        filter: blur(15px);
    }
    .layout-header {
        width: 100%;
        height: 80px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        box-shadow: 1px 1px 5px #39f;
        background-color: #ffffff;
        .header-wrap {
            width: 1100px;
            height: 100%;
            margin: 0 auto 0;
            h3 {
                float: left;
                font-size: 26px;
                margin-right: 60px;
                line-height: 80px;
            }
            ul {
                float: left;
                display: flex;
                align-items: center;
                height: 80px;
                li {
                    font-size: 18px;
                    width: 100px;
                    text-align: center;
                    height: 100%;
                    line-height: 80px;
                    a {
                        color: #666666;
                    }
                    &.active {
                        background-color: #39f;
                        a {
                            color: #ffffff;
                        }
                    }
                }
            }
            .search-input {
                float: right;
                height: 100%;
                display: flex;
                align-items: center;
                .ivu-input-wrapper {
                    width: 285px;
                }
            }
        }
    }
    .layout-content {
        width: 1100px;
        margin: 0 auto 0;
        padding: 95px 0 10px 0;
    }
    .layout-footer {
        width: 100%;
        background: rgba(38,38,39,.8);
        .footer-wrap {
            width: 1100px;
            margin: 0 auto 0;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            p:nth-of-type(1) {
                margin-bottom: 5px;
            }
        }
    }
}
</style>