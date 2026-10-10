function idCard() {

    // Pulling in text inputs
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;

    // Posting full name + address
    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    // Pulling in numbers
    let age = parseInt(document.getElementById("age").value);
    let phoneNumber = parseInt(document.getElementById("phoneNumber").value);

    // Array for number checking
    let numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);

    // Loop + conditions
    for (let i = 0; i < numberArray.length; i++) {

        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age: " + age;
        }
        else if (numberArray[i] > 100) {
            document.getElementById("postPhone").innerHTML = "Phone Number: " + phoneNumber;
        }
    }
}

