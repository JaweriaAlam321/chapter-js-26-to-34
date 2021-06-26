//chapter 26 -30



// TASK 01

// var num =+prompt("Enter an number")
// document.write("number : "+num)
// document.write("<br>round off value : "+Math.round(num));
// document.write("<br>floor value : "+Math.floor(num));
// document.write("<br>ceil value : "+Math.ceil(num));

 

// TASK 02

// var num =+prompt("Enter an number")
// document.write("number : "+num)
// document.write("<br>round off value : "+Math.round(num));
// document.write("<br>floor value : "+Math.floor(num));
// document.write("<br>ceil value : "+Math.ceil(num));



// TASK 03

// var number = +prompt("Enter negative number")
// var y = Math.abs(number)
// document.write("The absolute value of "+a+" is " +y)



// TASK 04

// var y = Math.floor((Math.random() * 7) + 1);
// document.write("random dice value : "+y)


// TASK 05

// var y = Math.floor((Math.random() * 2) + 1);
// if (y==2){
// 	document.write(y+"<br>random coin value : Heads")
// }
// else{
// 	document.write(y+"<br>random coin value : Tails")
// }


//TASK  06

// var z = Math.floor((Math.random() * 100) + 1);
// document.write("random number between 1 and 100 : "+z)



//TASK 08

// var x = Math.floor((Math.random() * 10) + 1);
// var y =prompt("Input a number")
// if (x==y){
// 	document.write("Congragulation  you gess the same number")
// }











                                                        //chapter 31-34


//TASK 01

// var y = new Date();
// document.write(y)


//TASK 02

// var x = new Date();
// var y= x.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current Month : "+arr[y])



//TASK 03

// var x = new Date();
// var y =x.getDay()
// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// alert("today is "+arr[y]);


//TASK 04

// var x = new Date()
// var dy= x.getDay()
// if (y==0 || y==6){
// 	alert("It’s Fun day")
// }


//TASK 05

// var X = new Date();
// var b = X.getDate();
// if (b<16){
// 	alert("First fifteen days of the month")
// }
// else{
// 	alert("Last days of the month")
// }


//TASK 06

// var x = new Date()
// document.write("Current Date : "+x)
// var y= x.getTime()
// document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+y)
// var min = y/(1000*3600)
// document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)


//TASK 07

// var x = new Date()
// y=x.getHours()
// if (y < 12){
// 	alert("Its AM")
// }
// else{
// 	alert("It's PM")
// }


//TASK 08

// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)


//TASK 09

// var x = new Date("Jun 18, 2015")
// y =x.getTime()
// var today = new Date()
// var to = today.getTime()
// var d = to-y
// d=d/(1000*3600*24)
// //d=Math.round(d)
// document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")


//TASK 10

//  var Date_1 = new Date("Jan 01, 2015")
//  var sec = Date_1.getTime()
//  var Date_2 = new Date("Dec 05, 2015")
//  var sec_2 = Date_2.getTime()
//  document.write("On reference date "+Date_2+"<br>")
//  var diff = sec_2-sec;
//  document.write(diff/(1000*60)+" seconds had passed since begining of 2015")


//TASK 11

// var x = new Date()
// document.write("Current date : "+a+"<br>")
// y =x.getHours()
// var z = new Date();
// x=y-1
// z.setHours(x)
// document.write("1 hour ago, it was "+z)


//TASK 12

// var x = new Date()
// document.write("Current date : "+x+"<br>")
// y =x.getFullYear()
// var z = new Date();
// x=y-100
// z.setFullYear(x)
// document.write("100 year back, it was "+z)


//TASK 13

// var Age = prompt("enter your age")
// var X = new Date()
// var Year = X.getFullYear()
// document.write("Your age is "+Age)
// difF =Year-Age
// document.write("<br>Your birth year is "+difF)


//TASK 14

// var Name_1 ="XYZ";
// var x = new Date();
// var y = x.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = arr[y]
// var unit = 410
// var chrg = 16
// var net = unit*chrg
// var late =350
// var gross =net +late
// document.write("<h1>K-Electric Bill </h1>")
// document.write("<br>Customer Name  "+ Name_1)
// document.write("<br> Current Month "+month)
// document.write("<br>  Number of units "+unit)
// document.write("<br> Charges per unit "+chrg+"<br>")
// document.write("<br>Net Amount Payable (within Due Date) "+net)
// document.write("<br>Late Payment Surcharge  "+late)
// document.write("<br>Gross Amount Payable (after Due Date)  "+gross)






