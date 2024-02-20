export const telegram = {
    namespaced: true,
    state: {
        WebApp: null,
        user: null
    },
    mutations: {
        setTelegramWebApp(state, TelegramWebApp) {
            state.WebApp = TelegramWebApp
            state.user = TelegramWebApp.initDataUnsafe?.user
        }
    },
    actions: {
        initTelegramWebApp({commit}, TelegramWebApp) {
            TelegramWebApp.ready()

            commit('setTelegramWebApp', TelegramWebApp)
        },
    }
}
