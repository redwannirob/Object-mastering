const normalPerson = {
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount,tax,tips){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }};





    const heroPerson = {
        firstName: 'Hero',
        lastName: 'Balam',
        salary: 25000
    };


    const friendlyPerson = {
        firstName:'Hero',
        lastName:'Golam',
        salary: 20000
    };

    // normalPerson.chargeBill();

//  const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
//  heroChargeBill(10000);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(3000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900,100,500);
// console.log(heroPerson.salary);
// normalPerson.chargeBill.call(friendlyPerson, 1000,500,500);
// // console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000,300,30]);
normalPerson.chargeBill.apply(heroPerson, [4000,400,100]);
normalPerson.chargeBill.apply(friendlyPerson,[3000,1000,1000])
console.log(heroPerson.salary)
// console.log(friendlyPerson.salary);



 

 

// const person = {
//     firstName: 'Redwan',
//     lastName: 'Nirob',
//     salary : 20000,
//     getFullName: function(){
//         console.log(this.firstName,this.lastName);
//     },
//     chargeBill : function(amount){
//         this.salary = this.salary - amount;
//         return amount;
//     }
// }

// person.chargeBill(5000);
// console.log(person.salary);

