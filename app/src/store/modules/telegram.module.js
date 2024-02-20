export const telegram = {
    namespaced: true,
    state: {
        WebApp: null
    },
    mutations: {
        setTelegramWebApp(state, TelegramWebApp) {
            state.WebApp = TelegramWebApp
        }
    },
    actions: {
        initTelegramWebApp({commit}, TelegramWebApp) {
            commit('setTelegramWebApp', TelegramWebApp)
        },
    }
}
