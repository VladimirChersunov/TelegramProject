import { BackArrowIcon } from "../Icons/BackArrowIcon";


export function ReportBug(props) {

    const nodemailer = require("nodemailer");

    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
   
main().catch(console.error);
  

  const handleClickBack = () => {
    props.visibleBugReport(false);
  };
  return (
    <div className="flex flex-col justify-center">
      <button
        className="ml-4 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
        onClick={handleClickBack}
      >
        <BackArrowIcon />
      </button>
      <div className="flex flex-col h-screen items-center justify-center">
      <div className=" p-4 border-b border-skin-border-base dark:border-skin-border-inverted w-[97%]">
        <h2 className="text-lg font-medium">Bug Report</h2>
      </div>
      <div className="flex-auto p-4 overflow-auto">
        <form>
          <div className="mb-4">
            <label htmlFor="to" className="block text-skin-base dark:text-skin-inverted font-medium mb-2">To: kb674ua@gmail.com</label>
           
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-skin-base dark:text-skin-inverted font-medium mb-2">Subject:</label>
            <input type="text" id="subject" name="subject" className="w-full border-gray-300 rounded-md p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-skin-base dark:text-skin-inverted font-medium mb-2">Message:</label>
            <textarea id="message" name="message" className="w-full border-gray-300 rounded-md p-2" rows="6" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Send</button>
        </form>
      </div>
    </div>
    </div>
  );
}
