export const functionUserArea = {
  validationUserArea: (sessionExist, sessionGet, router) => {
    if (sessionExist == false || sessionGet == undefined) {
      router.push("/");
      return false;
    }
    return true;
  },
  logoff: (sessionRemove, router) => {
    sessionRemove;
    router;
  }
};
