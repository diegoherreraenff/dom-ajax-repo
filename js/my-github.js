// Write code here to communicate with Github

// parte 1
const btngithub = document.getElementById("mygithub");
btngithub.addEventListener("click", event => {
  event.preventDefault();
  fetch("https://api.github.com/users/diegoherreraenff/repos")
    .then(responde => responde.json())
    .then(data => {
      console.log(data);
      data.forEach(repositorio => {
        console.log(repositorio.name);

        const lirepos = document.createElement("li");
        lirepos.innerText = repositorio.name;
        ulrepos.appendChild(lirepos);
      });
    });
  const ulrepos = document.getElementById("repos-list");
});

/* const ulrepos =document.getElementById("repos-list");
const lirepos = document.createElement ("li")
ulrepos.appendChild(lirepos);
 */
