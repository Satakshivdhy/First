//SubmitButton

document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("mobNumber").value.trim();
    const dob = document.getElementById("DOB").value;
    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;
    const qualification = document.getElementById("qualification").value;
    const grade = document.getElementById("grade").value.trim();
    const preferredCourse = document.getElementById("course").value;
    const timings = [];
    document
      .querySelectorAll("input[name='batchtiming']:checked")
      .forEach((element) => {
        timings.push(element.value);
      });

    console.log(gender);
    console.log(timings);
    console.log(fullName);

    const address = document.getElementById("residentialAddress").value.trim();
    const city = document.getElementById("city").value.trim();
    const pinCode = document.getElementById("pinCode").value.trim();
    const GuardianFullName = document
      .getElementById("GuardianFullName")
      .value.trim();
    const GuardianContact = document
      .getElementById("GuardianContact")
      .value.trim();
    const addInfo = document.getElementById("addInfo").value;
    const SpecialInfo = document.getElementById("SpecialInfo").value.trim();

    const RegistrationData = {
      FullName: fullName,
      Email: email,
      Phone: phone,
      DOB: dob,
      Gender: gender,
      HighestQualification: qualification,
      Grade: grade,
      PreferredCourse: preferredCourse,
      BatchTiming: timings,
      Address: address,
      City: city,
      PinCode: pinCode,
      GuardianFullName: GuardianFullName,
      GuardianContact: GuardianContact,
      AdditionalInfo: addInfo,
      SpecialInfo: SpecialInfo,
    };

    // if else with function call
    validateData(RegistrationData)
      ? (console.log("Registration Data :", RegistrationData),
        alert("Registration Successfull!!"))
      : alert("Registration Failed");
  });

function validateData(data) {
  let isValid = true;
  console.log(data);

  if(!data.FullName){
    document.getElementById("fullNameError").innerText = "Full Name Required";
    isValid = false;
  }
  else if (!/^[A-Za-z\s]+$/.test(data.FullName)) {
    document.getElementById("fullNameError").innerText =
      "Only alphabets and spaces are allowed";
    isValid = false;
  }

  if(!/^[A-Za-z\d\.\_]+(@gmail.com|outlook.com)$/.test(data.Email)){
    document.getElementById("emailError").innerText = "Enter a valid email";
    isValid = false;
  }

  if(!/^[6-9]\d{9}$/.test(data.Phone)){
    document.getElementById("phoneError").innerText = "Only Indian mobile numbers are allowed";
    isValid = false;
  }

//   if(/^([A-F]|[0-9]{1,3}(\.[0-9]+)?%)$/.test(data.Grade)){
//     document.getElementById("marksError").innerText= "invalid input";
//     isValid = false;
//   }

  if(!data.City){
    document.getElementById("cityError").innerText = "City Name Required";
    isValid = false;
  }
  else if (!/^[A-Za-z\s]+$/.test(data.City)) {
    document.getElementById("cityError").innerText =
      "Only alphabets and spaces are allowed";
    isValid = false;
  }



  return isValid;
}

//ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload;
  });
