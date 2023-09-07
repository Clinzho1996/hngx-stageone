const desiredTime = new Date();
desiredTime.setUTCHours(8);
desiredTime.setUTCMinutes(2);
desiredTime.setUTCSeconds(0);

const timestamp = desiredTime.getTime();

const timeElement = document.getElementById("time");
timeElement.innerHTML = timestamp.toString();

console.log(timestamp);
