<template>
    <div>
        
        
        <b-alert show variant="info">
            <h1>Something went wrong!</h1>
            <p>
                {{ error.message }}.   
                <nuxt-link class="alert-link" to="/">Go back to safety</nuxt-link> 
            </p>
        </b-alert>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'blank'
}
</script>
