<template>
    <div class="user-info_container">
        <div class="user-info_image">
            <img :src="imageUrl" alt="" draggable="false" />
        </div>

        <div class="user-info_description">
            <div class="user-info_caption">
                {{ user.name }}
            </div>

            <div>
                <b>Name:</b> {{ user.username }}
            </div>

            <div>
                <b>Email:</b> {{ user.email }}
            </div>

            <div>
                <b>Phone:</b> {{ user.phone }}
            </div>

            <div class="user-info_caption">
                О себе:
            </div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
</template>

<script>
    import noPhotoImage from '@/assets/images/no-photo.png';

    export default {
        name: 'UserInfo',
        props: {
            user: {
                type: Object
            }
        },
        data() {
            return {
                imageUrl: noPhotoImage,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user-info {
        &_container {
            display: grid;
            width: 100%;
            grid-template-columns: 45% 1fr;
        }

        &_image {
            img {
                width: 100%;
                max-width: 500px;
                margin: 0 auto;
            }
        }

        &_description {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            padding-left: 60px;
            font-size: 14px;
            line-height: 20px;
            color: #76787D;
            font-weight: 400;

            b {
                color: #333333;
                font-weight: 600;
            }
        }

        &_caption {
            font-size: 16px;
            line-height: 24px;
            color: #333333;
            font-weight: 600;
        }
    }

    @media screen and (max-width: 1000px) {
        .user-info {
            &_container {
                grid-template-columns: 1fr;
            }

            &_description {
                margin-top: 24px;
                padding-left: 0;
            }
        }
    }
</style>
