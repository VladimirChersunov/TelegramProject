import { BackArrowIcon } from "../Icons/BackArrowIcon";


export function ReportBug(props) {

    

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
        <form className="flex flex-col items-center">
          <div className="mb-4">
            <label htmlFor="to" className="block text-skin-base dark:text-skin-inverted font-medium mb-2">To: kb674ua@gmail.com</label>
           
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-skin-base dark:text-skin-inverted font-medium mb-2">Subject:</label>
            <input type="text" id="subject" name="subject" className="w-full border-skin-border-base dark:border-skin-border-inverted
             rounded-md text-skin-base p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-skin-base dark:text-skin-inverted font-medium mb-2">Message:</label>
            <textarea id="message" name="message" className="w-full text-skin-base border-skin-border-base
             dark:border-skin-border-inverted rounded-md p-2" rows="6" required></textarea>
          </div>
          <button type="submit" className="py-2 bg-skin-button-accent hover:bg-skin-button-accent-hover px-4
           rounded-md dark:bg-skin-fill dark:hover:bg-skin-button-accent-hover text-skin-inverted dark:text-skin-base
            transition-colors duration-300 w-[70%]">Send</button>
        </form>
      </div>
    </div>
    </div>
  );
}
