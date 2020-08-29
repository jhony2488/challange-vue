export const functionGlobal = {
  authenticationPage: (sessionExist, sessionGet, router) => {
    if (sessionExist && sessionGet != undefined) {
      let user = sessionGet;
      user = user.first_name.toLowerCase() + "-" + user.last_name.toLowerCase();
      router.push("/" + user);
    } else {
      return false;
    }
  }
};
