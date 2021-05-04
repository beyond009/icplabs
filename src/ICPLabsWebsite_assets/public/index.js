import ICPLabsWebsite from 'ic:canisters/ICPLabsWebsite';

ICPLabsWebsite.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
