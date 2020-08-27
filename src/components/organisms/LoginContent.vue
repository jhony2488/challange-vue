 <template>
  <div class="login-wrapper">
    <form action="" class="form">
      <div class="form-content">
        <InputLabelRequired
          type="email"
          idInput="user"
          placeholder="email@email.com"
          content="Email"
        />
        <InputLabelRequired
          type="password"
          idInput="password"
          placeholder="Senha"
          content="senha"
        />
        <ButtonPrimary content="Login" button="button-primary" type="submit" />
      </div>
    </form>
    <p>ou</p>
    <router-link to="/register">
      <ButtonPrimary content="Cadastre-se" button="button-secundary" />
    </router-link>
  </div>
</template>
 
 <script>
import { InputLabelRequired } from "@/components/molecules";
import { ButtonPrimary } from "@/components/atoms";

export default {
  components: {
    InputLabelRequired,
    ButtonPrimary,
  },
};
</script>
