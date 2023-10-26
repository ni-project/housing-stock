<template>
    <aside>
        <div class="search_caption">
            Поиск сотрудников
        </div>

        <div class="search_control">
            <label>
                <input type="text" placeholder="Введите id или имя" @keydown.enter="handleSearch" @input="handleInput" v-model="searchValue" />
            </label>
        </div>

        <div class="search_caption margin-lg">
            Результаты <img :src="urlPreloader" v-if="isLoading" alt="" draggable="false" class="preloader" />
        </div>

        <div class="search_list margin-md">
            <div v-if="getError.length">
                <div v-for="(error, index) in getError" :key="error[index]" class="search_list-error">
                    {{ error }}
                </div>
            </div>

            <div v-for="(user, index) in getUsers" :key="user[index]">
                <search-list-item :user="user" />
            </div>

            <div v-if="getUsers.length === 0 && !getError.length && !isLoading" class="search_list-empty">
                {{ searchValue.length > 0 ? 'нажмите Enter чтобы найти' : 'начните поиск' }}
            </div>
        </div>
    </aside>
</template>

<script>
    import {mapGetters} from 'vuex';
    import SearchListItem from "./SearchListItem";
    import svgPreloader from '@/assets/images/preloader.svg';

    export default {
        name: 'SearchContainer',
        components: {
            SearchListItem
        },
        data() {
            return {
                searchValue: '',
                isLoading: false,
                urlPreloader: svgPreloader,
            }
        },
        computed: mapGetters(['getUsers', 'getError']),
        methods: {
            async handleSearch() {
                if ( this.searchValue ) {
                    this.isLoading = true;

                    try {
                        await this.$store.dispatch('fetchUsers', this.searchValue);
                    } finally {
                        this.isLoading = false;
                    }
                }
            },

            handleInput() {
                if ( !this.searchValue ) {
                    this.$store.dispatch('resetSearchUsers');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    aside {
        padding: 24px;
        border-right: 1px solid #E0E0E0;
    }

    .search {
        &_caption {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;

            .preloader {
                display: inline-block;
                vertical-align: middle;
                width: 20px;
                height: 20px;
                margin-left: 8px;
            }
        }

        &_control {
            margin-top: 16px;

            input {
                display: block;
                width: 100%;
                height: 48px;
                padding: 0 16px;
                background: #ffffff;
                font-size: 16px;
                line-height: 24px;
                color: #333333;
                font-weight: 400;
                border-radius: 8px;
                border: 1px solid #E9ECEF;
                text-overflow: ellipsis;
            }
        }

        &_list {
            display: flex;
            flex-direction: column;
            row-gap: 16px;
            width: 100%;

            &-empty {
                font-size: 14px;
                line-height: 20px;
                color: #333333;
                font-weight: 400;
            }

            &-error {
                font-size: 14px;
                line-height: 20px;
                color: #E31F24;
                font-weight: 500;
            }
        }
    }
</style>
