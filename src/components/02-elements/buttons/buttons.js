const helloWorldButtons = document.querySelectorAll('.js-hello-world')

// for each helloWorldButton
helloWorldButtons.forEach((button) => {
  // add an event listener for clicks
  button.addEventListener('click', () => {
    // when a HelloWorldButton is clicked, alerts "Hello, world!"
    alert('Hello, world!')
  })
})