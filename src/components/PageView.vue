<template>
    <div>
        <div v-if="activePage === 'home'"><HomePage /></div>
    <div v-if="activePage === 'about'"><AboutPage /></div>
    </div>
</template>
<script>
import HomePage from './HomePage.vue';
import AboutPage from './AboutPage.vue';

export default {
    name:"PageView",
    props: ['activePage'],
    components: {
		HomePage,
		AboutPage
    }
}
</script>