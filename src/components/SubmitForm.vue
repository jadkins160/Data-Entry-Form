<template>
    <div class="container">
        <h1>Welcome! Please submit your information</h1>
        <form id="formSubmission" v-on:submit.prevent="saveUser" action="confirmation.html" method="post"
            target="confirmation.html">

            <label for="name">Name: </label>
            <input type="text" id="name" name="name" required v-model="newUser.name" />
            <div>&nbsp;</div>

            <label for="age">Age: </label>
            <input type="number" id="age" name="age" min="0" v-model="newUser.age" />
            <div>&nbsp;</div>

            <label for="title">Title: </label>
            <input type="text" id="title" name="title" required v-model="newUser.title" />
            <div>&nbsp;</div>

            <label for="hometown">Hometown: </label>
            <input type="text" id="hometown" name="hometown" v-model="newUser.hometown" />
            <div>&nbsp;</div>

            <button v-on:click="$event => submitForm()">Submit</button>

        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedUsers: [],
        }
    },
    methods: {
        getNextUserId() {
            return this.getNextUserId++;
        },
        saveUser() {
            this.newUser.id = this.getNextUserId();
            this.users.push(this.newUser);
            this.newUser = {
                id: null,
                name: "",
                age: "",
                title: "",
                hometown: ""
            };
        },
    },
}
</script>




<style></style>