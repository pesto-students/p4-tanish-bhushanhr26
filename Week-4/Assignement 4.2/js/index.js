
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}

var me = new Teacher();

me.initialize("John", 25);
me.teach("Inheritance");

me.initialize("Bhushan", 22);
me.teach("Polymorphism");

me.initialize("Samarpan", 23);
me.teach("Nothing");