<template>
  <div id="formSubmission">

    <submitForm></submitForm>
    <ConfirmationPage></ConfirmationPage>
  </div>
</template>

<script>
import SubmitForm from "./components/SubmitForm.vue";

export default {
  components: {
    SubmitForm,
  }
};
</script>
