<template>
    <div class="container">
        <h1>Welcome! Please submit your information</h1>
        <form id="formSubmission" v-on:submit.prevent="saveUser">

            <label for="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="required" required v-model="newUser.name" />
            <div>&nbsp;</div>

            <label for="age">Age: </label>
            <input type="number" id="age" name="age" min="0" v-model="newUser.age" />
            <div>&nbsp;</div>

            <label for="title">Title: </label>
            <input type="text" id="title" name="title" placeholder="required" required v-model="newUser.title" />
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
            userId: 1,
            addedUsers: [],
            newUser: {
                id: null,
                name: "",
                age: "",
                title: "",
                hometown: ""
            },
        }
    },
    methods: {
        getNextUserId() {
            return this.userId++;
        },
        submitForm() {
            this.$router.push({ name: 'confirmation' });
            this.newUser.id = this.getNextUserId();
            this.addedUsers.push(this.newUser);
            console.log(this.addedUsers);
        },
    },
}
</script>

<style>
h1 {
    text-align: center;
}

.container {
    width: 900px;
    height: 300px;
    border: 1px solid black;
    background-color: #fb9d9d;
    padding: 5px;
}
</style>