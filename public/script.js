const getComments = () => {
  fetch("/comments")
    .then((data) => data.json())
    .then((data) => showComments(data))
    .catch((err) => err);
}

getComments();
const showComments = (comments) => {
  let commentsSection = document.getElementById("suggestions");
  comments.map((commen) => {
    let section = document.createElement("section");
    section.className += "suggestion";
    let heading = document.createElement("h3");
    heading.innerHTML = commen.name;
    let comment = document.createElement("p");
    comment.innerHTML = commen.comment;
    section.appendChild(heading);
    section.appendChild(comment);
    commentsSection.appendChild(section);
  })
}