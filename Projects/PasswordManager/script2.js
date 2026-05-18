function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("Passwords")) || [];

  const showData = document.getElementById("passwordData");

  console.log(data);

  if (data.length <= 0) {
    showData.innerHTML = `<tr>
        <td colspan ="3">
        No Password saved
        </td>
        </tr>`;
    return;
  }

  data.forEach((element) => {
    const TR = document.createElement("tr");
    TR.innerHTML = `
            <td>${element.WebsiteName}</td>
            <td>${element.UserName}</td>
            <td>${element.Password}</td>
    `;

    showData.appendChild(TR);
  });
}

getDataFromLocalStorage();
