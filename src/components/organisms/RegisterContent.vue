 <template>
  <div class="register-wrapper">
      <h2>Cadastre-se</h2>
    <form action="" class="form">
      <div class="form-content">
        <InputLabelRequired
          type="text"
          idInput="name"
          placeholder="Jhonata Vincius Da Silva Araujo"
          content="nome"
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
      <ButtonPrimary
        content="Cadastrar"
        button="button-primary"
        type="submit"
      />
    </form>
  </div>
</template>
 
 <script>
import { InputLabelRequired } from "@/components/molecules";
import { ButtonPrimary } from "@/components/atoms";
import axios from "axios";

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
    ButtonPrimary,
  },
  methods: {
    Cep() {
      this.parsedCep = document.getElementById("cep").value;
      this.parsedCep = this.parsedCep.replace("-", "");
      if (this.parsedCep.length == 8) {
        axios
          .get("https://viacep.com.br/ws/" + this.parsedCep + "/json/unicode/")
          .then((data) => {
            console.log(data.data);
            document.getElementById("logradouro").value = data.data.logradouro;
            document.getElementById("bairro").value = data.data.bairro;
            document.getElementById("cidade").value = data.data.localidade;
            document.getElementById("estado").value = data.data.uf;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  created() {
    setInterval(() => {
      this.Cep();
    }, 1000);
  },
};
</script>