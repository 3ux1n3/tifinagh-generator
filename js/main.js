let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById("btn")




const generate = async (inputText) => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/http://tifinaghtools.eazypo.ca/api/tifinagh/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "http://tifinaghtools.eazypo.ca/",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": `Text=${inputText}&From=3&To=1`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });
    const result = await response.text(); //extract JSON from the http response
    return result;
}
button.addEventListener("click", function () {
    output.innerHTML = "Loading ."
    output.innerHTML = "Loading .."
    output.innerHTML = "Loading ..."
generate(input.value).then(r => output.innerHTML = r.toString().replace(/['"]+/g, ''))
});

//generate('Hamza').then(r => console.log(r))



