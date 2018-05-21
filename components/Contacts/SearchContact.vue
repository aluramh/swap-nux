<template>
       <div>
           <v-search
            :list="list"
            option-value="id"
            :custom-text="nameAndPosition"
            v-model="selectedContact"
            placeholder="Search contact by name"
            @searchchange="searchAction"
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
    props: {
        searchAction: Function
    },
    methods: {
        nameAndPosition(item) {
            return `${item.name} - ${item.position}`
        }
    },
    computed: {
        list() {
            return this.$store.state.loadedContacts
        }
    },
    watch: {
        selectedContact(contact) {
            this.$router.push('/contacts/' + contact.id)
        }
    }
}
</script>
