<template>
        <b-col cols="2" class="sidebar">
            <b-row class="justify-content-center">
                <b-col>
                    <b-button variant="link" @click="hideFilters">Hide Filters</b-button>
                </b-col>    
            </b-row>
            <b-row class="justify-content-center">
                <b-col>
                    <b-button variant="link">Clear All</b-button>
                </b-col>    
            </b-row>
            <b-row class="justify-content-center">
                <b-col>
                    <CategoryFilter/>
                </b-col>    
            </b-row>
            
        </b-col>
</template>


<script>
import CategoryFilter from '@/components/Filters/CategoryFilter'
export default {
    methods: {
        hideFilters() {
            this.$emit('hidden')
        }
    },
    components: {
        CategoryFilter
    }
}
</script>
