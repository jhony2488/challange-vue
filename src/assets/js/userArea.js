export const functionUserArea = {
  validationUserArea: (sessionExist, sessionGet, router) => {
    if (sessionExist == false || sessionGet == undefined) {
      router.push("/");
      return false;
    }
    return true;
  },
  putProfile: (sessionGet, api) => {
    let email = document.getElementById("emailPut").value,
      firstName = document.getElementById("firstNamePut").value,
      lastName = document.getElementById("lastNamePut").value,
      id = sessionGet.id,
      putProfileValue = {
        email: email,
        first_name: firstName,
        last_name: lastName,
      };

    if (
      putProfileValue.email != "" &&
      putProfileValue.email != undefined &&
      putProfileValue.first_name != "" &&
      putProfileValue.first_name != undefined &&
      putProfileValue.last_name != "" &&
      putProfileValue.last_name != undefined
    ) {
      api
        .put(`https://reqres.in/api/users/${id}`, putProfileValue)
        .then((res) => console.log(res))
        .catch((error) => alert(error));
    } else {
      alert("Insira todos os valores corretamente");
    }
  },
  logoff: (sessionRemove, router) => {
    sessionRemove;
    router;
  },
};
