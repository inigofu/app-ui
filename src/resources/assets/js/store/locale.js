export const state = {
    i18n: {},
    languages: [],
    keyCollector: false,
};

export const mutations = {
    setI18n: (state, i18n) => { state.i18n = i18n; },
    setLanguages: (state, languages) => { state.languages = languages; },
    addKey: (state, key) => {
        Object.keys(state.i18n).forEach((lang) => {
            state.i18n[lang][key] = '';
        });
    },
    setKeyCollector: (state, status) => { state.keyCollector = status; },
};

export const getters = {
    __: (state, getters, rootState) => (key) => {
        const { lang } = rootState.user.preferences.global;
        return state.i18n[lang]
            ? state.i18n[lang][key]
            : key;
    },
    current: (state, getters, rootState) => (rootState.user.preferences ?
        rootState.user.preferences.global.lang
        : null),
};

export const actions = {
    setLocale({ commit }, selectedLocale) {
        commit('setLocale', selectedLocale, { root: true });
    },
};
