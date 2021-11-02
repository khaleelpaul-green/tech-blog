const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') + 1);

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment-desc').value.trim();
  
    if (comment_content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
  
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);