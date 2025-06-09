function showAlert() {
  alert("Thank you for contacting us!");
}
function searchFunction() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = section.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
}

function clearSearch() {
  document.getElementById('searchBar').value = '';
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'block';
  });
}
