<template>
    <b-button
        type="submit"
        pill
        :variant="type"
    >{{text}}</b-button>
</template>

<script>
    export default {
        name: "SubmitButton",
        props: ['type', 'text']
    }
</script>

<style scoped>

</style>