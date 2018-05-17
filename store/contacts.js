const api = "http://35.192.139.25:3000/"
import axios from 'axios'
export const state = () => ({
    loadedContacts: [
        {
            id: '1',
            name: 'Orlando Bustamante'
        }
    ]
})


export const getters = {
    getContactById: state => id => {
        return state.loadedContacts.find(contact => contact.id === id)
    }
}
    
