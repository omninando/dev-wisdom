function random(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var xmlhttp = new XMLHttpRequest();
var url = "./quotes.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        jsonLoaded(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function jsonLoaded(arr) {
	var randomItem = random(arr.lines);
	var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

	document.getElementById('line').innerHTML = randomItem.text ;
	document.getElementById('author').innerHTML = '- ' + randomItem.author;
	document.body.style.backgroundColor = random(isDarkMode ? arr.colorsDarkMode :arr.colors  );

}
