const A = 1.6180339887 ;
const B = -0.6180339887 ;
const C =0.4472135955 ;

function calcFn( n ) {
    return Math.round( C * ( Math.pow(A,n) - Math.pow(B,n) ) ) ;
}

var inputEn = document.getElementById("userNumber");

inputEn.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
      
   submitN();
  }
});

function submitN(){
    var formElement = document.getElementById("numberForm");
    var inputElement = formElement.querySelector("#userNumber");

    if ( 1 <= parseInt(inputElement.value,10) && parseInt(inputElement.value,10) <= 42 ){
      console.log(calcFn( parseInt(inputElement.value,10) )) ;
      document.getElementById("output").innerHTML = " พจน์ที่ " + inputElement.value + " มีค่าเท่ากับ <br> " + calcFn( parseInt(inputElement.value,10) );
    } else if ( parseInt(inputElement.value,10) > 42 ){
      // n41 + n42 = n43 
      let bigA = 165580141n ;
      let bigB = 267914296n ;
      let temp = 0n ;

      for ( let i = 0 ; i < parseInt(inputElement.value,10) - 42  ; i++ )
      {
        temp = bigB ;
        bigB = bigB + bigA ;
        bigA = temp ;
      }

      document.getElementById("output").innerHTML = " พจน์ที่ " + inputElement.value + " มีค่าเท่ากับ <br> " + bigB.toString() ;

    }
}