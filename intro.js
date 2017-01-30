console.log("hello, world");

var dcClass =[
	"Sean", 
	"Drew", 
	"Daniel", 
	"Kyle",
	"Rishi",
	"Liz", 
	"Anna", 
	"Ryan",
	"Connie",
	"Casey", 
	"Sarah",
	"Andy",
	"Michael", 
	"Paul", 
	"Mason"
];

console.log(dcClass[3]);

dcClass.push("Rob")

dcClass.map((member, index)=>{
	console.log(member, index);
})

console.log(this);