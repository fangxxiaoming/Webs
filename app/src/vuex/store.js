import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
photoList:[]
}
const mutations={
    addPhoto(state,photoList){
        state.photoList=photoList
    }
}
const getters={

}
const actions={

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})