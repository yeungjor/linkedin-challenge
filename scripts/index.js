const username = "Jordan Yeung";
const jobtitle = "Software Engineering Student";
const profilepic = "./assets/images/man.png";

const usernameElems = document.querySelectorAll(".data-username");
const jobTitleElem = document.querySelector(".data-job-title");
const profilePicElem = document.querySelectorAll(".data-profilepic");

for (let el of usernameElems) {
  el.innerHTML = username;
}

jobTitleElem.innerHTML = jobtitle;

for (let pro of profilePicElem) {
  pro.src = profilepic;
}
