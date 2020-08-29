<template>
  <div class="user-area-wrapper">
    <div class="profile" v-if="editPerfil == false">
      <img :src="img" :alt="name" />
      <h1>{{ name }}</h1>
      <Button
        content="Alterar Perfil"
        buttonClass="button-primary"
        type="button"
        @click.native="editPerfil = !editPerfil"
      />
      <Button
        content="Sair"
        buttonClass="button-secundary"
        type="button"
        @click.native="logoff"
      />
    </div>
    <form action="" @submit.prevent="putProfile()" v-if="editPerfil">
      <div class="edit-profile">
        <InputLabelRequired
          type="email"
          idInput="emailPut"
          placeholder="Email"
          content="Email"
        />
        <InputLabelRequired
          type="text"
          idInput="firstNamePut"
          placeholder="Primeiro Nome"
          content="Primeiro Nome"
        />
        <InputLabelRequired
          type="text"
          idInput="lastNamePut"
          placeholder="Sobrenome"
          content="Sobrenome"
        />
      </div>
      <Button
        content="Alterar Perfil"
        buttonClass="button-primary"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import { Button } from "@/components/atoms";
import { InputLabelRequired } from "@/components/molecules";
import { functionUserArea } from "../../assets/js/userArea";
import { functionCookies } from "../../assets/js/cookies";

export default {
  data() {
    return {
      profile: null,
      img: null,
      name: null,
      id: null,
      editPerfil: false,
    };
  },
  components: {
    Button,
    InputLabelRequired,
  },
  methods: {
    validation() {
      let exist = this.$session.exists(),
        get = this.$session.get(0);
      return functionUserArea.validationUserArea(exist, get, this.$router);
    },
    logoff() {
      let remove = this.$session.remove(0);
      functionUserArea.logoffUser(remove, this.$router.push("/"));
    },
    putProfile() {
      let email = document.getElementById("emailPut").value,
        firstName = document.getElementById("firstNamePut").value,
        lastName = document.getElementById("lastNamePut").value,
        id = this.$session.get(0).id;

      this.putProfileValue = {
        email: email,
        first_name: firstName,
        last_name: lastName,
      };

      this.$api
        .put("https://reqres.in/api/users/" + id, this.putProfileValue)
        .then((res) => console.log(res))
        .catch((error) => alert(error));
    },
    setValueInputs() {
      let valueInput = document.getElementById("emailPut").value;
      if (this.editPerfil && valueInput.length <= 0) {
        alert(valueInput.length);
        this.setValuesInputs;
      }
    },
  },
  computed: {
    setValuesInputs() {
      document.getElementById("emailPut").value = this.$session.get(0).email;
      document.getElementById("firstNamePut").value = this.$session.get(
        0
      ).first_name;
      document.getElementById("lastNamePut").value = this.$session.get(
        0
      ).last_name;
      return 0;
    },
  },
  created() {
    let sessionGetUser = this.$session.get(0);
    this.validation();
    if (this.validation()) {
      this.profile = sessionGetUser;
      this.img = this.profile.avatar;
      this.id = this.profile.id;
      this.name = this.profile.first_name + " " + this.profile.last_name;
    }
  },
  mounted() {
    let sessionGetUser = this.$session.get(0),
      name = sessionGetUser.first_name + " " + sessionGetUser.last_name;
    functionCookies.setCookie("email", sessionGetUser.email);
    functionCookies.setCookie("name", name);
    setTimeout(() => {
      if (this.editPerfil) {
        this.setValueInputs();
      }
    }, 2000);
  },
};
</script>

