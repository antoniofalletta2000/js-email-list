//creaimo una variabile per il link
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
//richiamiamo l'elemento dal DOM
const emailListEl = document.getElementById("email_list")
const buttonEl = document.getElementById("btn")

//WITH FETCH

//creo una funzione di generazione delle emails che poi andrò a richiamare nel click event
//function emailGenerate() {
//apriamo un ciclo for in quanto ci vengono chieste 10 email, il link ne genera una sola
// for (let index = 0; index < 10; index++) {
//apriamo una funzione fetch
//  fetch(endpoint)
//il primo then tradurrà il contenuto del link nel linguaggio js
// .then(response => response.json())
//col secondo then lo lavoriamo
// .then((data) => {
//destrutturiamo l'object volendo solamente la chiave response che ci da l'email
//  const { response } = data
//creiamo una variabile con il template litteral in cui creiamo un li richiamando la chiave response
//  const markup = `<li>${response}</li>`
//console.log(markup);
//trascriviamo il markup creato dentro l'ul sommato a se stesso
// emailListEl.innerHTML += markup
/*           })
  }
  
}
emailGenerate() */

//WITH AXIOS

function emailGenerate() {
    for (let index = 0; index < 10; index++) {
        axios.get(endpoint)
            .then(({ data }) => {

                const { response } = data
                console.log(response);
                const markup = `<li>${response}</li>`
                emailListEl.innerHTML += markup
            })
    }
}

emailGenerate()

buttonEl.addEventListener("click", function () {
    emailListEl.innerHTML = ""
    emailGenerate()
})