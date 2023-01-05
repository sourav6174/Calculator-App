let string = "";
 let buttons = document.querySelectorAll('.button');
 Array.from(buttons).forEach((button)=>{
   button.addEventListener('click', (e)=>{
     if(e.target.innerHTML == '='){
       string = eval(string);
       document.querySelector('input').value = string;
     }
     else if(e.target.innerHTML == 'C'){
       string = ""
       document.querySelector('input').value = string;
     }
      // else if (e.target.innerHTML == 'sin'){
      //    string = parseFloat(Math.sin((e.target.innerHTML*3.141)/180));
      //    document.querySelector('input').value = string;
      //  }
     else{ 
     console.log(e.target)
     string = string + e.target.innerHTML;
     document.querySelector('input').value = string;
       }
   })
 })



//Extra
// function sin(){
// 	document.calcul.result.value=Math.sin(document.calcul.result.value);
// 	}

// 	function cos(){
// 	document.calcul.result.value=Math.cos(document.calcul.result.value);
// 	}

// 	function tan(){
// 	document.calcul.result.value=Math.tan(document.calcul.result.value);
// 	}

// 	function BACKSPC(){
// 	var a = document.calcul.result.value;
// 	document.calcul.result.value = a.substr(0, a.length-1);
// 	}

// 	function square(){
// 	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
// 	}

// 	function cubed(){
// 	document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
// 	}

// 	function sqrt2(){
// 	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
// 	}

// 	function sqrt3(){
// 	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/3);
// 	}

// 	function number(value){
// 	document.calcul.result.value += value;
// 	}

// 	function remv(){
// 	document.calcul.result.value=" ";
// 	}

// 	function equal(){
// 	document.calcul.result.value=eval(document.calcul.result.value);
// 	}


//  else if (e.target.innerHTML == 'sin'){
//    console.log(e.target)
//    string = Math.sin(e.target.innerHTML);
//    document.querySelector('input').value = string;
//  }
//  else if (e.target.innerHTML == '&#960;'){
//   document.querySelector('input').value = 3.1415;
//  }
