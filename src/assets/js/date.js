export const functionDate = {
  date: () => {
    let date = new Date(),
      day = date.getDate() + 10,
      month = date.getMonth(),
      year = date.getFullYear(),
      time =
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " " +
        "UTC";
    if (diasNoMes() == 31 && day >= 27) {
      month++;
      day -= 31;
    } else if (diasNoMes() == 30 && day >= 26) {
      month++;
      day -= 30;
    }
    if (month < 10) {
      month = "0" + month;
    }
    date = new Date(day + " " + month + " " + year + " " + time);
    return date;
  },
};
function diasNoMes(mes, ano) {
  var data = new Date(ano, mes, 0);
  return data.getDate();
}
