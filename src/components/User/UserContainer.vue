<template>
    <main>
        <div v-if="Object.keys(getShowUserInfo).length">
            <user-info :user="getShowUserInfo" />
        </div>

        <div v-else class="search_result-empty">
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
    </main>
</template>

<script>
    import {mapGetters} from 'vuex';
    import UserInfo from './UserInfo'

    export default {
        name: 'UserContainer',
        components: {
            UserInfo
        },
        computed: mapGetters(['getShowUserInfo'])
    }
</script>

<style lang="scss" scoped>
    main {
        padding: 24px;
    }

    .search {
        &_result {
            &-empty {
                display: flex;
                width: 100%;
                height: 100%;
                font-size: 14px;
                line-height: 20px;
                color: #333333;
                font-weight: 400;
                max-height: calc(100vh - 168px);
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        }
    }
</style>
