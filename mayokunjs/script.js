name = prompt("Let's meet you");

if (name=="Admin"){
	let password = prompt("Pls enter your password")
	if (password == 123456){
		alert("Welcome")}
		else if(password=="" || password == null){
			alert("Pls enter your password")}
		else{ alert("Wrong password")}
} else if(name== "" || name== null){
		alert("Pls enter your name")}
  else{ alert("I don't know you")};