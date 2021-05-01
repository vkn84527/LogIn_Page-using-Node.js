
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Enter Your Mail',
    pass: 'Enter Your Password'
  }
});

var mailOptions = {
  form: 'Enter Your Mail',
  to: 'Enter Your other Mail',
  subject: 'Sending Email using Node.js',
  //text: `Hello User, You are working on sending gmail using Node.Js`
  //html: '<h1>Welcome</h1><p>That was easy!</p>' 
  html: '<h1>Hello User </h1><p>Click_On this link for changing password<a href="http://localhost:9999/change-password.html" > Link </a></p>'
  //  attachments: [{
  //      filename: 'text1.txt',
  //      content: 'hello world!'
  
  //          }]
};
function ab2() {
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
exports.ab2 = ab2;