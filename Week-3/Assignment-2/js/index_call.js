const object = {
  fullname: function (name, profession) {
    return this.college + " " + this.city + " " + name + " " + profession;
  },
};
const student = {
  college: "SRM",
  city: "Chennai",
};
const samarpan = {
  college: "SRM",
  city: "Kolkata",
};
console.log(object.fullname.call(samarpan, "Samarpan", "Operation"));

