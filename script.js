function showTime() {
  var date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  var ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12

  var timeElement = document.getElementById('time')
  if (hours < 10) hours = '0' + hours
  if (minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds


  timeElement.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`

  setTimeout(showTime, 1000)
}

showTime();
