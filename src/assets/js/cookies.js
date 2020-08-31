import { functionDate } from "../../assets/js/date";

export const functionCookies = {
  setCookie: (name, value) => {
    let duration = functionDate.date(),
      cookie =
        name +
        "=" +
        escape(value) +
        (duration ? "; duration=" + duration.toGMTString() : "");

    document.cookie = cookie;
  },
  getCookie: (name) => {
    let cookies = document.cookie,
      prefix = name + "=",
      begin = cookies.indexOf("; " + prefix),
      end;

    if (begin == -1) {
      begin = cookies.indexOf(prefix);

      if (begin != 0) {
        return null;
      }
    } else {
      begin += 2;
    }

    end = cookies.indexOf(";", begin);
    if (end == -1) {
      end = cookies.length;
    }
    return unescape(cookies.substring(begin + prefix.length, end));
  },
  deleteAllCookies: () => {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i],
        eqPos = cookie.indexOf("="),
        name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
  },
};
