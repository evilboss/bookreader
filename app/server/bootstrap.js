Meteor.startup(function () {
    UploadServer.init({
        tmpDir: process.env.PWD + '/.uploads/tmp',
        uploadDir: process.env.PWD + '/.uploads/',
        checkCreateDirectories: true //create the directories for you
    });
    console.log(process.env.MAIL_URL);
    Accounts.emailTemplates.from = 'SNC-BookReaderAdmin ';
    Accounts.emailTemplates.siteName = 'SNC-BookReader';

    //-- Subject line of the email.
    Accounts.emailTemplates.verifyEmail.subject = function(user) {
        return 'Confirm Your Email Address for SNC-BookReader';
    };

    //-- Email text
    Accounts.emailTemplates.verifyEmail.text = function(user, url) {
        return 'Thank you for registering.  Please click on the following link to verify your email address: \r\n' + url;
    };

    // 3.  Send email when account is created
    Accounts.config({
        sendVerificationEmail: true
    });

    Email.send({
        from: "meteor.email.2014@gmail.com",
        to: "Agand1945@fleckens.hu",
        subject: "Meteor Can Send Emails via Gmail",
        text: "Its pretty easy to send emails via gmail."
    });
});