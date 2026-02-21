const addBtn = document.getElementById("addBtn");
const search = document.getElementById("search");

addBtn.addEventListener("click", () => {
  if (search.value.trim() === "") {
    alert("Enter a username first");
    return;
  }

  alert(`Friend request sent to ${search.value}`);
  search.value = "";
});

