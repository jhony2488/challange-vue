export const functionCep = {
  cep: (parsedCep, api) => {
    parsedCep = document.getElementById("cep").value;
    parsedCep = parsedCep.replace("-", "");
    if (parsedCep.length == 8) {
      api
        .get("https://viacep.com.br/ws/" + parsedCep + "/json/unicode/")
        .then(data => {
          if (
            data.data.logradouro != undefined &&
            data.data.bairro != undefined &&
            data.data.localidade != undefined &&
            data.data.uf != undefined
          ) {
            document.getElementById("logradouro").value = data.data.logradouro;
            document.getElementById("bairro").value = data.data.bairro;
            document.getElementById("cidade").value = data.data.localidade;
            document.getElementById("estado").value = data.data.uf;
          } else {
            document.getElementById("logradouro").value =
              "Insira o CEP corretamente";
            document.getElementById("bairro").value =
              "Insira o CEP corretamente";
            document.getElementById("cidade").value =
              "Insira o CEP corretamente";
            document.getElementById("estado").value =
              "Insira o CEP corretamente";
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
