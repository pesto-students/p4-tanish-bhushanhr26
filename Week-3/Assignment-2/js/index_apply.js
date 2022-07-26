const object = {
  fullname: function (name, profession) {
    return (
      this.college +
      " " +
      this.city +
      " " +
      name +
      " " +
      profession +
      " " +
      this.company
    );
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
const apoorv = {
  college: "SRM",
  city: "Kanpur",
  company: "Newton School",
};
console.log(object.fullname.apply(apoorv, ["Apoorv", "Operations"]));
console.log(object.fullname.apply(student, ["Student", "Operations"])); //getting undefined because not passing the company parameter.
console.log(object.fullname.apply(samarpan, ["Samarpan", "Operations"])); //getting undefined because not passing the company parameter.
