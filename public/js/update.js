const updateFormHandler = async (event) => {
    event.preventDefault();

    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
  
    const title = document.querySelector('#update-title').value.trim();
    const description = document.querySelector('#update-content').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
};
  
document
    .querySelector('.update-form')
    .addEventListener('submit', updateFormHandler);