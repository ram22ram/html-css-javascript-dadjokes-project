const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "3/joQDzwmogCS8LCvSOPOg==kU7JAy7NbTWfvEWE";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
        },
    };

    const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
    
async function getjoke(){
    try {
        jokeEl.innerText = "Loading....";
        btnEl.disabled = true;
        btnEl.innerText = "Please wait....";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
          } catch (error) {
        jokeEl.innerText = "An error happened, please try again later";
        btnEl.disabled = false;
         btnEl.innerText = "Tell me a joke";
        console.log(error);
  }
      }
    
btnEl.addEventListener("click", getjoke);
