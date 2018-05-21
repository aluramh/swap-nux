import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state:{
            allContacts: [],
            loadedContacts: [],
            page: 1,
            perPage: 12
        },
        mutations:{
            setContacts(state, contacts) {
                state.allContacts = contacts
            },
            loadFromPagination(state) {
                let from = state.page * state.perPage - state.perPage
                let to   = state.perPage
                state.loadedContacts = state.allContacts.slice().splice(from,to)
            },
            loadFromSearch(state, foundContacts) {
                state.loadedContacts = foundContacts
            },
            changePage(state, newPage) {
                state.page = newPage
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get('/api/contacts')
                .then(data => {
                    vuexContext.commit('setContacts', data.contacts)
                })
                .catch(e => new Error(e))      
            },
            searchContacts(vuexContext, term) {
                if (term.length < 3) {
                    vuexContext.commit('loadFromPagination')
                    return
                }
                term = term.toLowerCase()
                let foundContacts = vuexContext.state.allContacts.filter( contact => {
                        
                    return (
                        contact.name.toLowerCase().includes(term) || 
                        contact.position.toLowerCase().includes(term) ||
                        contact.company.toLowerCase().includes(term)
                    )
                })

                vuexContext.commit('loadFromSearch', foundContacts) 
            },
            changePage(vuexContext, context) {
                vuexContext.commit('changePage', context)
                vuexContext.commit('loadFromPagination')
            }

        },
        getters: {
            totalContacts: state => {
                return state.allContacts.length
            },
            contactById: state => id => {
                return state.allContacts.find( contact => contact.id === id )
            }
            
        }
    })
}

export default createStore