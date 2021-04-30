
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Enter Your Mail',
    pass: 'Enter Password'
  }
});

var mailOptions = {
  form: 'Enter Your Mail',
  to: 'Enter Your Mail',
  subject: 'Sending Email using Node.js',
  //text: `Hello User, You are working on sending gmail using Node.Js`
  //html: '<h1>Welcome</h1><p>That was easy!</p>' 
  html: '<h1>Hello User</h1><p>You SingUp Successfull</p>'
  //  attachments: [{
  //      filename: 'text1.txt',
  //      content: 'hello world!'
  
  //          }]
};
function ab() {
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
exports.ab = ab;