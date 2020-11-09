<template>
    <v-bottom-navigation>
        <v-btn v-for="item in menus" :key="item.name" value="item.name" :to="{name: item.route}">
            <span>{{item.name}}</span>
            <v-icon>{{item.icon}}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    import { mdiHomeVariant } from '@mdi/js'
    import { mdiCalendarClock } from '@mdi/js'
    import { mdiStickerPlusOutline } from '@mdi/js'
    import { mdiFormatListChecks } from '@mdi/js'

    export default {
        name: "AppNav",
        data() {
            return {
                currentLink: this.$router.currentRoute.path,
                menus : [
                    {
                        route: 'dashboard',
                        name: 'Home',
                        icon: mdiHomeVariant
                    },
                    {
                        route: 'history',
                        name: 'History',
                        icon: mdiCalendarClock
                    },
                    {
                        route: 'new-session',
                        name: 'New',
                        icon: mdiStickerPlusOutline
                    },
                    {
                        route: 'routines',
                        name: 'Routines',
                        icon: mdiFormatListChecks
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>