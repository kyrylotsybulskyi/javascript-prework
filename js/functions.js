function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
<<<<<<< HEAD
    document.getElementById('messages').appendChild(div);
    dump(div.innerHTML)
=======
	document.getElementById('messages').appendChild(div);
>>>>>>> 0499cbd5acab6f4678543daeb4934fbe794cea30
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}