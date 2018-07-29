<template>
    <div>

        <v-search
            :list="list"
            option-text="name"
            option-value="id"
            :custom-text="customText"
            placeholder="Search contact by name, position or company"
            @select="selectContact"
            :selected-item="selectedContact"
            @searchchange="searchContacts"
        />
    </div>
    

</template>


<script>
export default {
    data () {
        return {
            selectedContact: {},
        }
    },
    methods: {
        customText(item) {
            return `${item.name} - ${item.position} (${item.company})`
        },
        searchContacts(term) {
            if (term.length === 0) { return }
            this.$store.dispatch('searchContacts', term)
            
        },
        selectContact(item) {
            if(item.id) {
                this.selectedContact = item
                this.$store.dispatch('loadOneById', item.id)
            } else {
               
                this.$store.dispatch('loadAllContacts')
            
            }
        }
    },
    computed: {
        list() {
            return this.$store.state.loadedContacts
        }
    }
}
</script>
