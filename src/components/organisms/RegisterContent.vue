 <template>
  <div class="register-wrapper">
    <h2>Cadastre-se</h2>
    <form class="form" @submit.prevent="register()">
      <div class="form-content">
        <InputLabelRequired
          type="text"
          idInput="first_name"
          placeholder="Jhonata"
          content="Nome"
        />
        <InputLabelRequired
          type="text"
          idInput="last_name"
          placeholder="Vinicius"
          content="Sobrenome"
        />
        <InputLabelRequired
          type="email"
          idInput="email"
          placeholder="email@email.com"
          content="email"
        />
        <InputLabelRequired
          type="text"
          idInput="cep"
          placeholder="CEP"
          content="CEP"
          v-mask="['#####-###', '#####-###']"
        />
        <InputLabelRequired
          type="text"
          idInput="logradouro"
          placeholder="Logradouro"
          content="Logradouro"
        />
        <InputLabelRequired
          type="text"
          idInput="bairro"
          placeholder="Bairro"
          content="Bairro"
        />
        <InputLabelRequired
          type="text"
          idInput="cidade"
          placeholder="Cidade"
          content="Cidade"
        />
        <InputLabelRequired
          type="text"
          idInput="estado"
          placeholder="UF"
          content="Estado"
        />
      </div>
      <Button content="Cadastrar" buttonClass="button-primary" type="submit" />
    </form>
  </div>
</template>
 
 <script>
import { InputLabelRequired } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { functionGlobal } from "../../assets/js/authentication";
import { functionCep } from "../../assets/js/cep";

export default {
  data() {
    return {
      parsedCep: "",
      CepGet: "",
      logradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
    };
  },
  components: {
    InputLabelRequired,
    Button,
  },
  methods: {
    Cep() {
      functionCep.cep(this.parsedCep, this.$api);
    },
    authentication() {
      let exist = this.$session.exists(),
        get = this.$session.get(0);
      functionGlobal.authenticationPage(exist, get, this.$router);
    },
    register() {
      let newUser = {
        email: document.getElementById("email").value,
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
      };
      if (
        newUser.email != "" &&
        newUser.email != undefined &&
        newUser.first_name != "" &&
        newUser.last_name != undefined
      ) {
        this.$api
          .post("https://reqres.in/api/users", newUser)
          .then((res) => {
            console.log(res);
            this.$router.push("/");
          })
          .catch((error) => alert(error));
      } else {
        alert("insira todos os valores corretamente");
      }
    },
  },
  created() {
    this.authentication();
    setInterval(() => {
      this.Cep();
    }, 1000);
  },
};
</script>