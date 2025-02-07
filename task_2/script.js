document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("password");
  const regex = /[!@#$%^&*()\-_=+[{\]};:'",<.>/?\\|]/;
  const requirementsContainer = document.getElementById("requirementsContainer");
  const reqs = {
    1: { isTrue: input.value.length >= 8, text: "sifre minimum 8 karakter" },
    2: { isTrue: regex.test(input.value), text: "sifre ozel karakter" },
    3: { isTrue: input.value.includes("test"), text: "sifre test icermeli" },
  };

  const congrats = document.createElement("p");
  congrats.innerText = "Tebrikler şifreniz gerekli güvenlik isterlerini karşılıyor!";
  congrats.style.color = "green";
  congrats.style.display = "none";
  requirementsContainer.appendChild(congrats);

  const requirements = document.createElement("p");
  requirements.innerText = "";
  requirements.style.display = "inline";
  requirementsContainer.appendChild(requirements);

  const validList = document.createElement("ul");
  validList.style.color = "green";
  const unvalidList = document.createElement("ul");
  unvalidList.style.color = "red";
  requirementsContainer.appendChild(validList);
  requirementsContainer.appendChild(unvalidList);

  function checkPassword() {
    validList.innerHTML = "";
    unvalidList.innerHTML = "";
    for (const key in reqs) {
      if (reqs[key].isTrue) {
        const valid = document.createElement("li");
        valid.innerText = reqs[key].text;
        validList.appendChild(valid);
      } else {
        const unvalid = document.createElement("li");
        unvalid.innerText = reqs[key].text;
        unvalidList.appendChild(unvalid);
      }
    }
  }

  input.addEventListener("input", function () {
    const label = document.getElementById("label");
    label.innerText = "Please enter a password that meets the requirements";
    checkPassword();
  });
});
