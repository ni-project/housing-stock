import {createStore} from 'vuex';

export default createStore({
    state() {
        return(
            {
                searchListItems: [],
                error: [],
                showUserInfo: {},
            }
        )
    },
    mutations: {
        updateListUsers(state, value) {
            state.searchListItems = value;
        },
        updateError(state, value) {
            state.error = value;
        },
        updateShowUserInfo(state, value) {
            state.showUserInfo = value;
        }
    },
    getters: {
        getUsers(state) {
            return state.searchListItems;
        },
        getError(state) {
            return state.error
        },
        getShowUserInfo(state) {
            return state.showUserInfo;
        }
    },
    actions: {
        async fetchUsers(context, value) {
            let error = [];

            this.state.searchListItems = [];
            this.state.error = [];
            this.state.showUserInfo = {};

            try {
                const params = value.split(',');
                let usersUrl = 'https://jsonplaceholder.typicode.com/users';
                let paramsIds = [];
                let paramsNames = [];
                let usersIds = [];
                let usersNames = [];
                let result = [];

                let getResponseUsers = async (url, params, queryName) => {
                    const paramsCount = params.length - 1;
                    let queryParams = '';
                    let result = [];

                    for( let index = 0; index < params.length; index++ ) {
                        if ( index === 0 ) queryParams += '?';

                        queryParams += `${queryName}=${params[index]}`;

                        if ( index !== paramsCount ) queryParams += '&';
                    }

                    await fetch(url + queryParams, { method: 'GET' }).then(response => response.json()).then(data => {
                        result = data;
                    });

                    return result;
                };

                for( let index = 0; index < params.length; index++ ) {
                    params[index] = params[index].trim();

                    if ( params[index].length === 0 ) {
                        params.splice(index, 1);
                    }
                }

                for( let index = 0; index < params.length; index++ ) {
                    if ( isNaN(params[index]) ) {
                        paramsNames.push(params[index]);
                    } else {
                        paramsIds.push(params[index]);
                    }
                }

                if ( paramsIds.length ) {
                    usersIds = await getResponseUsers(usersUrl, paramsIds, 'id');
                }

                if ( paramsNames.length ) {
                    usersNames = await getResponseUsers(usersUrl, paramsNames, 'username');
                }

                result = usersIds.concat(usersNames);

                for (let index = 0; index < params.length; index ++) {
                    let hasUser = false;

                    for (let user of result) {
                        if ( user.id == params[index] || user.username == params[index] ) {
                            hasUser = true;
                        }
                    }

                    if ( !hasUser ) {
                        error.push(`Юзер ${params[index]} не найден`);
                    }
                }

                context.commit('updateListUsers', result);
                context.commit('updateError', error);
            } catch (e) {
                error.push(`Что-то пошло не так :(`);

                console.log('error > ', e);

                context.commit('updateError', error);
            }
        },

        resetSearchUsers(context) {
            context.commit('updateListUsers', []);
            context.commit('updateError', []);
            context.commit('updateShowUserInfo', []);
        },

        showUserInfo(context, user) {
            let result;

            result = user;
            context.commit('updateShowUserInfo', result);
        }
    }
});
