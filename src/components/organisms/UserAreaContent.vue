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
    <div class="nearby-locations">
      <div
        class="nearby-locations"
        v-for="item in nearbyLocations"
        :key="item.place_id"
      >
        <img :src="item.icon" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <div :v-if="item != 0 || item != undefined">
          <Rantings :item="item.rating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/atoms";
import { InputLabelRequired, Rantings } from "@/components/molecules";
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
      nearbyLocations: [],
    };
  },
  components: {
    Button,
    InputLabelRequired,
    Rantings,
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
      functionUserArea.putProfile(this.$session.get(0), this.$api);
    },
    setValueInputs() {
      let valueInput = document.getElementById("emailPut").value;
      if (this.editPerfil && valueInput.length <= 0) {
        alert(valueInput.length);
        this.setValuesInputs;
      }
    },
    nearbyLocationsGet() {
      let latitude = 0,
        longitude = 0;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          latitude = String(latitude);
          longitude = String(longitude);
          this.$api
            .get(
              ` https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters&key=AIzaSyDllpqAp1iHkkEam0cb0PtDQSTpOblQ504&location=${latitude},${longitude}&radius=1500`
            )
            .then((res) => {
              console.log(res.data.results);
              this.nearbyLocations = res.data.results;
            })
            .catch((error) => console.log(error));
        });
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
    this.nearbyLocationsGet();
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

