<template>
  <div id="formSubmission">
    
    <submitForm></submitForm>
    <ConfirmationPage></ConfirmationPage>
  </div>
</template>

<script>
import SubmitForm from "./components/SubmitForm.vue";
//import ConfirmationPage from "./components/ConfirmationPage.vue";

export default {
  components: {
    SubmitForm,
    //ConfirmationPage
  }
};
</script>
