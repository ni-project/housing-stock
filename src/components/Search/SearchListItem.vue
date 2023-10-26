<template>
    <a class="search_list-item" @click.prevent="handleUser">
        <div class="search_list-item_photo">
            <img :src="imageUrl" alt="" draggable="false" />
        </div>

        <div class="search_list-item_info">
            <div class="search_list-item_name">
                {{user.username}}
            </div>

            <div class="search_list-item_email">
                {{user.email}}
            </div>
        </div>
    </a>
</template>

<script>
    import noPhotoImage from '@/assets/images/no-photo.png';

    export default {
        props: {
            user: {
                type: Object,
            }
        },
        data() {
            return {
                imageUrl: noPhotoImage,
            }
        },
        methods: {
            handleUser() {
                this.$store.dispatch('showUserInfo', this.user);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .search_list-item {
        display: grid;
        width: 100%;
        height: 70px;
        grid-template-columns: 70px 1fr;
        background: #ffffff;
        text-decoration: none;
        border: 0;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
        cursor: pointer;
        user-select: none;

        &_photo {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px 0 0 10px;
            }
        }

        &_info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 4px;
            padding: 0 16px;
            overflow: hidden;
            border-left: 1px solid #E0E0E0;
        }

        &_name {
            display: block;
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            color: #333333;
            font-weight: 600;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &_email {
            display: block;
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            color: #76787D;
            font-weight: 400;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
</style>
