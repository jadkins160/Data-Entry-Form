<template>
    <div>
        <h1>Confirmation Page</h1>
    </div>
    <submitForm></submitForm>
    <router-link to="/confirmation"></router-link>
</template>

<script>
import SubmitForm from '../components/SubmitForm.vue';

export default {
    name: 'SubmitForm',
    components: {
        SubmitForm
    }
};
</script>

<style></style>