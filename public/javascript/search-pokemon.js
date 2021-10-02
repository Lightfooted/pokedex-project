//Search for Pokemon form
async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();

    location.href = '/pokemon/' + name
}
  
  document.querySelector('.new-pokemon-form').addEventListener('submit', newFormHandler);