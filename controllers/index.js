const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');



const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: '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'
      }
    })
  );







exports.formPage = async (req,res)=>{

    const{firstName, lastName, email, message, country} =  req.body  
    transporter.sendMail({
        to: 'b.rubimbura@gmail.com',
        from: email,
        subject: 'Contact us!',
        html: `<p> First Name : ${firstName} <br/> Last Name: ${lastName} <br/> Email: ${email} <br/> Country: ${country} <br/> Message: ${message}  </p>`
      });
      return  res.status(200).json({message: 'success!'})

}