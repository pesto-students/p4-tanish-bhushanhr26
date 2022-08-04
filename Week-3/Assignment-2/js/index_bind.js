const pesto = {
  course: "full-Stack",
  credential: function () {
    return this.login + " " + this.password;
  },
};
const bajrang = {
  login: "Bajrang Bhushan",
  password: "Anything",
};
const getCredential = pesto.credential.bind(bajrang);
console.log(getCredential());
