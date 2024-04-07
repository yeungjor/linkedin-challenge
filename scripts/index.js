// const username = "Jordan Yeung";
// const jobtitle = "Software Engineering Student";
// const profilepic = "./assets/images/man.png";

const loadUserProfile = () => {
  const usernameElems = document.querySelectorAll(".data-username");
  const jobTitleElem = document.querySelector(".data-job-title");
  const profilePicElem = document.querySelectorAll(".data-profilepic");

  for (let el of usernameElems) {
    el.innerHTML = userProfile.username;
  }

  jobTitleElem.innerHTML = userProfile.jobtitle;

  for (let pro of profilePicElem) {
    pro.src = userProfile.profilepic;
  }
};

loadUserProfile();

const createPost = () => {
  const username = document.querySelector(".data-username").innerHTML;
  const post = document.querySelector(".data-post").value;

  if (post) {
    const parentDiv = document.querySelector(".posts");

    const postItem = document.createElement("div");
    postItem.classList.add("posts__item");

    const postUsername = document.createElement("div");
    postUsername.classList.add("posts__username");
    postUsername.innerText = username + " Posted";

    const postContent = document.createElement("div");
    postContent.classList.add("posts__content");

    const postMsg = document.createElement("p");
    postMsg.innerText = post;

    const postLike = document.createElement("div");
    postLike.classList.add("posts__like");

    const likeBtn = document.createElement("button");

    postItem.appendChild(postUsername);

    postItem.appendChild(postContent);

    postContent.appendChild(postMsg);

    postItem.appendChild(postLike);

    // Append to parent
    parentDiv.prepend(postItem);
  } else {
    alert("Error: Empty post");
  }
};
