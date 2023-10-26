<template>
    <div class="container">
        <header>
            <header-container />
        </header>

        <div class="wrapper">
            <div class="content">
                <search-container />

                <user-container />
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderContainer from '@/components/Header/HeaderContainer.vue';
    import SearchContainer from '@/components/Search/SearchContainer.vue';
    import UserContainer from '@/components/User/UserContainer.vue';

    export default {
        components: {
            HeaderContainer,
            SearchContainer,
            UserContainer,
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .wrapper {
        display: flex;
        flex: 1;
        padding-bottom: 48px;
    }

    .content {
        display: grid;
        width: 100%;
        grid-template-columns: 290px 1fr;
        max-width: 1266px;
        margin: 0 auto;
        background-color: #FDFDFD;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 1300px) {
        .container {
            padding: 0 24px;
        }
    }
</style>
