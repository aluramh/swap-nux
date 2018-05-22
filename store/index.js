import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state:{
            allContacts: [],
            loadedContacts: [],
            page: 1,
            perPage: 12,
            filters: {
                category: []
            }
        },
        mutations:{
            setAllContacts(state, contacts) {
                state.allContacts = contacts
            },
            loadContacts(state, contacts) {
                state.loadedContacts = contacts
            },
            loadOneById(state, contact) {
                state.loadedContacts = [contact]
            },
            changePage(state, page) {
                state.page = page
            },
            loadAllContacts(state) {
                state.loadedContacts = state.allContacts
            },
            setFilter(state, {filter, value} ) {
                state.filters[filter] = value
            }
        },
        actions:{
            nuxtServerInit({commit}, {app}) {
                return app.$axios.$get('/contacts')
                .then(data => {
                    commit('setAllContacts', data.contacts)
                    commit('loadContacts', data.contacts)   
                })
                .catch(e => new Error(e))      
            },
            searchContacts({commit, state}, term) {
                term = term.toLowerCase()
                let found = state.allContacts.filter( contact => {
                    return contact.name.toLowerCase().includes(term) || 
                    contact.position.toLowerCase().includes(term) ||
                    contact.company.toLowerCase().includes(term)
                })

                commit('loadContacts', found)

            },
            changePage({commit}, page) {
                commit('changePage', page)
            },
            loadOneById({commit,state}, id) {
                let contact = state.allContacts.find( c => c.id === id)
                commit('loadOneById', contact)
            },
            loadAllContacts({commit}) {
                commit('loadAllContacts')
            },
            setFilter( {commit}, {filter,value}) {
                commit('setFilter', {filter,value})
            }

        },
        getters: {
            totalContacts: state => {
                return state.loadedContacts.length
            },
            contactById: state => id => {
                return state.allContacts.find( contact => contact.id === id )
            }
            
        }
    })
}

export default createStore