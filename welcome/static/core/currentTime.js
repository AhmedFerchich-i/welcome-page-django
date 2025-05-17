function getCurrentTime(){
  const time=Date()
  const timeStr=time.toLocaleUpperCase()
  document.getElementById("time").textContent=timeStr

}

window.onload=getCurrentTime
setInterval(updateTime, 1000);