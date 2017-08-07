let basics = document.querySelector("#basics");
let story = document.querySelector("#story");
let pic = document.querySelector("#pic");

let req = new XMLHttpRequest();
req.open("GET", "http://api.github.com/users/swkane");
req.addEventListener("load", reqListener);
req.send();
console.log(req);

function reqListener() {
  let data = JSON.parse(this.responseText);
  console.log(data);

  let name = document.createElement('p');
  name.innerHTML = `<span>Name:</span> ${data.name}`;
  basics.appendChild(name);

  let acct = document.createElement('p');
  acct.innerHTML = `<span>GitHub URL:</span> <a href="${data.html_url}">swkane</a>`;
  basics.appendChild(acct);

  // GitHub API represents my email as null in their data, even though I have always had my email connected, so I had to hardcode it in
  let email = document.createElement('p');
  email.innerHTML = `<span>Email:</span> swkane@indiana.edu`;
  basics.appendChild(email);

  let company = document.createElement('p');
  company.innerHTML = `<span>Company:</span> ${data.company}`;
  basics.appendChild(company);

  let website = document.createElement('p');
  website.innerHTML = `<span>Website:</span> <a href="${data.blog}">My Website</a>`;
  basics.appendChild(website);

  let bio = document.createElement('p');
  bio.innerHTML = `${data.bio}`;
  story.appendChild(bio);

  //Could not format image because our IP Address exceeded the amount of time we could call the GitHub API
  let image = document.createElement('img');
  image.setAttribute("src", `${data.avatar_url}`);
  pic.appendChild(image);


  // console.log(data.bio);

}
