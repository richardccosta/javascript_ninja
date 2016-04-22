function somar (varA, varB) {
	 return varB + varA;
}

function onClick () {
	 console.log(soma); 
}

function colocarValor (valorA) {
	 semValor = valorA;
	 console.log("o valor da variavel agora é "+semValor);
}
function verificar3valores (var1,var2,var3) {
	if (var1 == "" || var1 == null ) console.log("não1");  
    if (var2 == "" || var2 == null) console.log("não2");
    if (var3 == "" || var3 == null) console.log("não3");
    else{
    	return var1 + var2 + var3;
    }    
 }
 function verificarValoresVazios (var1,var2,var3) {
 	if (var1== null && var2 ==null && var3 ==null) {
 		return false;
 	}   
 	if (var1!= null && var2 ==null && var3 ==null) {
 		console.log(var1);
 	} 
 	if (var2!= null && var1 ==null && var3 ==null) {
 		console.log(var2);
 	}   
 	if (var3!= null && var1 ==null && var2 ==null) {
 		console.log(var3);
 	}   
 }
