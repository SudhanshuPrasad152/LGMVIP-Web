let form = document.getElementById("register");

form.addEventListener("submit", function () {
    let card = document.querySelector(".card");

    //getting all the data from form
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value
    const email = document.getElementById("email").value;
    const url = document.getElementById("url").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    let skills = [];
    const skillEl = document.querySelectorAll('input[name="skill"]');
    for (const rb of skillEl) {
        if (rb.checked) {
            skills.push(rb.value);
        }
    }

    //inserting data into output div
    let newStudent = document.createElement('div');
    newStudent.classList.add("output");
    newStudent.innerHTML = `
    <img src="${url}" alt="image">
    <h3 class="text-info">${name}</h3>
    <h4 class="text-info">${age}</h4>
    <h4 class="text-info">${gender}</h4>
    <h4 class="text-info">${skills}</h4>
    <h5 class="text-info"><a href="">${email}</a></h5>
    `
    //adding the card one after another
    card.appendChild(newStudent);

    //clearing the input fields after submission
    document.querySelector('input[id="name"]').value = '';
    document.querySelector('input[id="age"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('input[type="url"]').value = '';
    document.querySelector('input[type="radio"]').checked = false;
    let skillClear = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < skillClear.length; i++) {
        skillClear[i].checked = false;
    }
})


//img-link https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSb7zJGdTFMutgnlpTIIjbwMa4rWLV91s7qqD3bL37xw&s