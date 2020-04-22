function serviceValue(service) {

    switch (service) {
        case "outstanding":
            percentage = 0.3; break;
        case "good":
            percentage = 0.2; break;           
        case "okay":
            percentage = 0.15; break;
        case "bad":
            percentage = 0.10; break;
        case "terrible":
            percentage = 0.05; break;           
    }
    return percentage;

}

function calculatePrice(price, service, share) {

    let percentage = serviceValue(service);
    let amount = Math.floor((price * percentage) / share);
    return amount;
}

document.querySelector("button").addEventListener("click", function() {

    let billAmount = parseInt(document.querySelector("#amount").value);
    let serviceRating = document.querySelector("#service").value;
    let numberOfPerson = parseInt(document.querySelector("#people").value);

    if (isNaN(billAmount) || isNaN(numberOfPerson) || serviceRating === "none") {
        alert("Please specify value");
        return;
    }
    var element = document.querySelector(".question");
    element.classList.add("visible");

    var element2 = document.querySelector(".tip-result");
    element2.classList.remove("visible");

    let value = calculatePrice(billAmount, serviceRating, numberOfPerson);

    document.querySelector("#tip").innerHTML = `$ ${value}`;

});

document.querySelector(".btn").addEventListener("click", function () {
    var element = document.querySelector(".tip-result");
    element.classList.add("visible");

    var element2 = document.querySelector(".question");
    element2.classList.remove("visible");

});
