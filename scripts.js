const linksSocialMedia = {
  github: 'manoelrochadev',
  youtube: 'manoelrochadev',
  facebook: 'manoelmelo',
  instagram: 'manoel_rocha29',
  twitter: 'manoelrocha29'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      myBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
// textContent edita o html
getGitHubProfileInfos()
