const emailHeaders = new Headers();
emailHeaders.append("apikey", "wziYvGSTKfabNvfSagx2RwVSoGB2bFzT");

const factsHeaders = new Headers();
factsHeaders.append('X-Api-Key', 'RycD1ERzjLqwvzxyecuTag==MbryYD3jmt5A9yuA')

const requestOptionsEmail = {
  method: 'GET',
  redirect: 'follow',
  headers: emailHeaders
};

const requestOptionsFacts = {
    method: 'GET',
    headers: factsHeaders,
}

document.getElementById("funFact").innerHTML = "Grabbing a fact..... Please wait!"

fetch("https://api.api-ninjas.com/v1/facts?limit="+1, requestOptionsFacts)
    .then(response => response.text())
    .then(result => {
        console.log(result)
        let value = JSON.parse(result)
        console.log(value[0].fact)
        document.getElementById("funFact").innerHTML = value[0].fact
    })
    .catch(error => {
        console.log('error', error)
        document.getElementById("funFact").innerHTML = "Oops! Connection timed out! API won't work at this time"
    })


function checkEmail() {
    document.getElementById("result").innerHTML = "Loading..."
    let email = document.getElementById("email").value;
    fetch("https://api.apilayer.com/email_verification/check?email="+email, requestOptionsEmail)
    .then(response => response.text())
    .then(result => {
            value = JSON.parse(result)
        if (value.smtp_check == true) {
            document.getElementById("result").innerHTML = "This email is valid!"
        } else {
            document.getElementById("result").innerHTML = "Invalid email.."
        }
    })
    .catch(error => {
        document.getElementById("result").innerHTML = "Error connection timeout!"
        console.log('error', error)
}); 
}