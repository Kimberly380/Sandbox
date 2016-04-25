// //******************** HOFs that *accept* and use a function **********************/
// //========================
// // Applies given function
// //========================
function useNext(next) {
//   console.log('I\'m happy to be here. Now I\'ll do the "next" thing, haha.');
    
  var likes = ['pizza', 'old coins', 'music'];
  likes.forEach(function(el) { next(el)});
  console.log('');
}

function foo(s) { console.log('  I love ' + s + '!'); }
function goo(s) { console.log('  The string "' + s + '" has ' + s.length + ' characters in it'); }

useNext(foo);
useNext(goo);

// //******************** HOFs that *return* a function **********************/

// //=========================
// // Closure making function
// //=========================
// function makeOpinionFunction(opinion) {
//   var f = function(topic) {
//     console.log('I think ' + topic + ' are ' + opinion); // remembers opinion
//   }
//   return f;
// }

// console.log('================ Closure ===============');
// var allIsCool = makeOpinionFunction('cool!');
// console.log('');
// allIsCool('dogs');
// allIsCool('vegan cheese products');

// var allIsSad = makeOpinionFunction('sad.');
// console.log('');
// allIsSad('frowning clowns');
// allIsSad('cardboard jackets');

// //=================================
// // Another closure making function
// //=================================
// function makeScalingFunction(scaleFactor) {
//   return function(x) {
//     var product = scaleFactor * x; // remembers scaleFactor
//     console.log(scaleFactor + ' times ' + x + ' eauals ' + product + '.');
//     return product;
//   }
// }

// var scaleByTen = makeScalingFunction(10);
// console.log('\n================ Another Closure ================');
// scaleByTen(-2);
// scaleByTen(50);

// var scaleByMinusOne = makeScalingFunction(-1);
// console.log('');
// scaleByMinusOne(-100);
// var y = scaleByMinusOne(3);
// console.log('y = ' + y);


//#############################here's my code practice

var $button = $('button');
var $printText = $('#output');
var $userName = $('#userName');
var userName;
$button.hide();


$userName.change(function(){
  useName($userName.val(), practice);
})

function useName (name,onClick){
  var currName = name;
  $button.html('Hi ' + currName + ' Click Here!').show('medium');
  $userName.hide();  
  $button.on("click",function(){onClick(currName);});
}

function practice (name){
  appendStuff();
  $button.hide();
}


function appendStuff (name) {
  $printText.html("Ok, "+name+" ,Let's play a game.</br></br>Click on a number below.");
}









//here's what you did on my site.