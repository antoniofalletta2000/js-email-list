const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
const emailListEl = document.getElementById("email_list")

for (let index = 0; index < 10; index++) {
    fetch(endpoint)
    .then(response => response.json())
    .then((data) => {
        const { response } = data
        const markup = `<li>${response}</li>`
        console.log(markup);
        emailListEl.innerHTML+=markup
    })
}

