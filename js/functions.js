function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
    dump(div.innerHTML)
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}