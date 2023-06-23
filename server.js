const nodemailer = require('nodemailer');
const fs = require('fs');

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'samuel.gitonga@thejitu.com', // Jitu's email address
    pass: 'yourpassword' // Jitu's email password
  }
});

// Compose the email details
const mailOptions = {
  from: 'gitongas684@gmail.com',
  to: 'jonathan.mwaniki@thejitu.com',
  subject: 'Weekly Report',
  html: '<p>Hello Jonathan,</p><p>Please find attached my weekly report.</p>',
  attachments: [
    {
      filename: 'weekly_report.docx',
      content: fs.createReadStream('path/to/weekly_report.docx') // Replace with the actual path to the Word document
    }
  ]
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent successfully!');
  }
});
