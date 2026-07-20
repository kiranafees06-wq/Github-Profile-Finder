function searchUser() {
  let userName = document.getElementById("username").value;
  let profile = document.getElementById("profile");

  if (userName === "") {
    profile.innerHTML = "<p>Please enter a GitHub username.</p>";
    return;
  }
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.message === "Not Found") {
        profile.innerHTML = "<p>User not found.</p>";
        return;
      }
      profile.style.display = "block";

      profile.innerHTML = `
        <img src="${data.avatar_url}"><br>
        <b>Name:</b> ${data.name || data.login} <br>
        <b>Bio:</b> ${data.bio || "No Bio Available"} <br>
        <b>Followers:</b> ${data.followers} <br>
        <b>Company:</b> ${data.company || "None"} <br>
        <b>Repo:</b> ${data.public_repos || "NO Repo Found"}<br>
        <b>Location:</b> ${data.location} <br><br>
        <a href="${data.html_url}" target="_blank">
        View on GitHub
    </a>
`;
    });
}
