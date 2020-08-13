const getComments = () => {
  fetch("/comments")
    .then((data) => data.json())
    .then((data) => showComments(data))
    .catch((err) => err);
}

getComments();
const showComments = (comments) => {
  let commentsSection = document.getElementById("suggestions");
   for (let i = 0; i < comments.length; i++) {
    let section = document.createElement("section");
    section.className += "suggestion";
    let heading = document.createElement("h3");
    heading.innerHTML = comments[i].name;
    let comment = document.createElement("p");
    comment.innerHTML = comments[i].comment;
    section.appendChild(heading);
    section.appendChild(comment);
    commentsSection.appendChild(section);
    }
}