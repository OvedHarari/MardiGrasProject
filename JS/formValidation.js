(() => {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
  var email = document.getElementById("validationCustomEmail");
  email.oninput = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
      email.setCustomValidity("Invalid field.");
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
      email.setCustomValidity("");
    }
  };
})();
