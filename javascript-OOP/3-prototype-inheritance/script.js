function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype; Salah

Manager.prototype = Object.create(Employee.prototype);

Employee.prototype.sayhello = function (name) {
  console.log(`hello ${name}, namaku adalah ${this.name}. aku seorang Employee`);
};

Manager.prototype.sayhello = function (name) {
  console.log(`hello ${name}, namaku adalah ${this.name}. aku seorang Manager`);
};

const employee = new Employee("ikbar");
employee.sayhello("joko");
const manager = new Manager("budy");
manager.sayhello("joko");
