
const sgMail = require('@sendgrid/mail')
const API_KEY = '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';
sgMail.setApiKey(API_KEY)
const msg = {
    to: 'Petalpurpose@gmail.com', // Change to your recipient
    from: 'dskafos@dskafos.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })