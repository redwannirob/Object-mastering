// const normalPerson = {
//     firstName : 'Rahim',
//     lastName : 'Uddin',
//     salary : 15000,
//     getFullName : function(){
//         console.log(this.firstName,this.lastName);
//     },
//     chargeBill: function(amount){
//         this.salary = this.salary - amount;
//         return this.salary;
//     }}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary) 

const person = {
    firstName: 'Redwan',
    lastName: 'Nirob',
    salary : 20000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return amount;
    }
}

person.chargeBill(5000);
console.log(person.salary);

