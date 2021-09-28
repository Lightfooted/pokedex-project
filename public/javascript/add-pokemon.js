async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value;
    const height = document.querySelector('input[name="height"]').value;
    const weight = document.querySelector('input[name="weight"]').value;
    const front_default= document.querySelector('input[name="front_default"]').value;
    const entry_number = document.querySelector('input[name="entry_number"]').value;
  
    const response = await fetch(`/api/pocketmonsters`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        height,
        weight,
        front_default,
        entry_number
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-pokemon-form').addEventListener('submit', newFormHandler);