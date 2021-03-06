/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi


   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
  var first = function (arr , func) {
  	return func(arr[0]);
  }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
function last (arr, func) {
  return func(arr[arr.length-1])
  }


last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply (num1, num2, func) {

  return func(num1 * num2);
  }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains



  function contains(name, str, func) {
  	var test;
  	for (var i = 0 ; i < name.length ; i++ ){
  		if (name[i] === str) {
  			test = true;
  		}

  	}
  	if (test === true) {
  		return func(true);
  	}
  	return func(false)

  }


contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq



    function uniq(arr, fun){
    	var uniqueArr = [];
    	for (var i = 0 ; i < arr.length ; i++) {
    		if (uniqueArr.indexOf(arr[i]) === -1 ) {
    			uniqueArr.push(arr[i]);
    		}
    	}
    	return fun(uniqueArr);



    }

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    function each(arr, fun) {
    	arr.forEach(function (val) {
    		return fun(val,arr.indexOf(val));
    	})

    }
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
function getUserById (obj, ids, fun){
	for (var i = 0 ; i < obj.length ; i++){
		if (ids === obj[i].id) {
			return fun(obj[i]);
		}

	}
	return 'there is no (' + ids+ ') id this Object.'
}

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
