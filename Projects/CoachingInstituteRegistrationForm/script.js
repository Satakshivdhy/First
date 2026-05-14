//SubmitButton

document.getElementById("registrationFrom").addEventListener("submit",(event)=>{
    event.preventdefault();

    const fn = document.getElementById("fullName").value;
    const gender = document.getElementById("input[name='gender']:checked?").value;
    const timings = [];
    document.querySelectorAll("input[name='batchtiming']:checked").forEach((element)=>{timings.push(element.value)});

    console.log(gender);
    console.log(timings);
    
    


})


//ResetButton