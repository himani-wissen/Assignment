class Emp 
{ 
	name:string 
	age: number 
	constructor (name: string, age: number) 
	{ 
		this.name = name; 
		this.age= age; 
	} 
	display() 
	{ 
		console.log("\nName: "+this.name); 
		console.log("Age: "+this.age); 
	} 
 
} 
	class Clerk extends Emp 
{ 
	salary: number; 
	designation: string; 
	constructor (name: string, age: number, salary: number, designation:string) 
	{ 
		super(name, age); 
		this.salary = salary; 
		this.designation= designation;
	}
	displayAll() 
	{ 
		this.display(); 
		console.log("Salary: "+this.salary); 
		console.log("Designation: "+this.designation); 
	} 
} 
var c1= new Clerk ("Raju", 25, 30000, "Tester"); 
var c2 = new Clerk ("Suman", 33, 55000, "Programmer"); 
c1.displayAll(); 
c2.displayAll();
