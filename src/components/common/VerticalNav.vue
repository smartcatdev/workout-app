<template>
    <div class="vertical-nav">
        <b-nav vertical>

            <b-nav-item :to="{name: 'dashboard'}">
                    <b-icon-building></b-icon-building> Dashboard
            </b-nav-item>

            <b-nav-item :to="{name: 'settings'}">
                <b-icon-gear></b-icon-gear> Settings
            </b-nav-item>

            <b-nav-item :to="{name: 'new-session'}">
                <b-icon-gear></b-icon-gear> New Session
            </b-nav-item>

        </b-nav>
    </div>
</template>

<script>
    export default {
        name: "VerticalNav"
    }
</script>

<style scoped>
</style>