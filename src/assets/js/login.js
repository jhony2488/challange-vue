export const functionLogin = {
  login: (api, sessionSave, router) => {
    api.get("https://reqres.in/api/users").then((data) => {
      let datasUser, testLogin, keyUser;

      datasUser = data.data.data.filter((user) => {
        let nome = user.first_name + user.last_name,
          nomeGet = document.getElementById("name").value,
          emailGet = document.getElementById("email").value;
        emailGet = emailGet.replace(" ", "");
        nomeGet = nomeGet.replace(" ", "");

        if (user.email == emailGet) {
          console.log("email correto");
          if (nome == nomeGet) {
            console.log("nome correto");
            return user;
          } else {
            console.log("Nome Incorreto:" + nomeGet);
            alert("nome incorreto");
            return false;
          }
        } else {
          if (data.data.data.lenght >= testLogin) {
            console.log("Email Incorreto:" + emailGet);
            alert("email incorreto");
            return false;
          }

          testLogin++;
        }
      });
      if (datasUser.length >= 1) {
        datasUser = datasUser.reduce((total, value) => {
          return total + value;
        });
        keyUser =
          datasUser.first_name.toLowerCase() +
          "-" +
          datasUser.last_name.toLowerCase();
        sessionSave.set(0, datasUser);
        router.push("/" + keyUser);
      }
    });
  },
};
