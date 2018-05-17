<template>
    <b-card class="swap-card"> 
        <div class="card-text">
            {{contact.name}}
        </div>
    </b-card>
     
 
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true
        },
        asLink: {
            type: Boolean,
            default: false
        }
    }

}
</script>

<style scoped>
.swap-card{
    transition: 0.8s;
    height: 12.5rem;
    max-height: 15rem;
    margin: 1rem;
    font-size: 80%;
}
.card-body{
    max-height: 15rem;
    background: linear-gradient(to bottom,rgba(222, 222, 222, 0),rgba(222, 222, 222, 1));
}
</style>

