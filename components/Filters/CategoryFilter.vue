<template>
     <b-form>

    <b-form-group label="Categories">
        <b-form-checkbox-group 
            plain 
            stacked 
            v-model="selected" 
            :options="options"/>
    </b-form-group>
     </b-form>
    
</template>

<script>
export default {
    data() {
        return {
            options: [
                {text: 'Family', value: 'family'},
                {text: 'Work', value: 'work'},
                {text: 'Category 3', value: 'cat3'},
                {text: 'Category 4', value: 'cat4'}
            ],
            selected: []
        }
    },
    watch: {
        selected(value) {
            this.$store.dispatch('setFilter', {
                filter: 'category',
                value:  value
            })
        }
        
    }
}
</script>

