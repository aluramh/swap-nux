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
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get('/api/contacts')
                .then(data => {
                    vuexContext.commit('setAllContacts', data.contacts)
                    vuexContext.commit('loadContacts', data.contacts)   
                })
                .catch(e => new Error(e))      
            },
            searchContacts(vuexContext, term) {
                term = term.toLowerCase()
                let found = vuexContext.state.allContacts.filter( contact => {
                    return contact.name.toLowerCase().includes(term) || 
                    contact.position.toLowerCase().includes(term) ||
                    contact.company.toLowerCase().includes(term)
                })

                vuexContext.commit('loadContacts', found)

            },
            changePage(vuexContext, page) {
                vuexContext.commit('changePage', page)
            },
            loadOneById(vuexContext, id) {
                let contact = vuexContext.state.allContacts.find( c => c.id === id)
                vuexContext.commit('loadOneById', contact)
            },
            loadAllContacts(vuexContext) {
                vuexContext.commit('loadAllContacts')
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