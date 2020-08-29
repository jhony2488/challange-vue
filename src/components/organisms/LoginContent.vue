 <template>
  <div class="login-wrapper">
    <form action="" class="form" @submit.prevent="login()">
      <div class="form-content">
        <InputLabelRequired
          type="email"
          idInput="email"
          placeholder="email@email.com"
          content="Email"
        />
        <InputLabelRequired
          type="text"
          idInput="name"
          placeholder="Nome e Sobrenome"
          content="Nome"
        />
        <Button content="Login" buttonClass="button-primary" type="submit" />
      </div>
    </form>
    <p>ou</p>
    <router-link to="/register">
      <Button content="Cadastre-se" buttonClass="button-secundary" />
    </router-link>
  </div>
</template>
 
 <script>
import { InputLabelRequired } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { functionGlobal } from "../../assets/js/authentication";
import { functionLogin } from "../../assets/js/login";
import { functionCookies } from "../../assets/js/cookies";

export default {
  name: "loginContent",
  components: {
    InputLabelRequired,
    Button,
  },
  methods: {
    login() {
      functionLogin.login(this.$api, this.$session, this.$router);
    },
    authentication() {
      let exist = this.$session.exists(),
        get = this.$session.get(0);
      functionGlobal.authenticationPage(exist, get, this.$router);
    },
    cookiesGetDelete() {
      let count;
      document.getElementById("email").value = functionCookies.getCookie(
        "email"
      );
      document.getElementById("name").value = functionCookies.getCookie("name");
      count = 0;
      if (count < 1) {
        document.getElementById("email").onfocus = () => {
          if (count < 1) {
            functionCookies.deleteAllCookies();
            count++;
          }
        };
        document.getElementById("name").onfocus = () => {
          if (count < 1) {
            functionCookies.deleteAllCookies();
            count++;
          }
        };
      }
    },
  },
  created() {
    this.authentication();
  },
  mounted() {
    this.cookiesGetDelete();
  },
};
</script>
