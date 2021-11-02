const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert("You are now logged out.")
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};


window.onload = function() {
  inactivityTime();
}

let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 5000)
      // 1000 milliseconds = 1 second
  }
};

document.querySelector('#logout').addEventListener('click', logout);
