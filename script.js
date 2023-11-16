//your JS code here. If required.
/// century year must be divisible by 400.
// and normal year must divisible by 4. 
// noth known as leap year

 let typeofyear = function daysOfAYear(year){
	if(year%4==0 || year%400 == 0){
		 return 366;
	}
	 else{
		  return 365;
	 }
}
  let y = prompt("Enter the year")
 daysOfAYear(y);

 