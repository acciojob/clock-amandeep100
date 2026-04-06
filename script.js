//your JS code here. If required.
function updateTime(){
const now = new Date();
	document.getElementById("time").innerText = now.toLocalString()
}
setInterval(updateTime,1000)
