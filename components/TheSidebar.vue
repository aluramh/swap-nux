<template>
        <b-col cols="2" class="sidebar">
            <b-row class="justify-content-center">
                <b-button-group vertical>
                    <b-button variant="link" @click="hideFilters">Hide Filters</b-button>
                    <b-button variant="link">Clear All</b-button>
                </b-button-group>
            </b-row>
            
        </b-col>
        

</template>


<script>
export default {
    methods: {
        hideFilters() {
            this.$emit('hidden')
        }
    }
}
</script>
