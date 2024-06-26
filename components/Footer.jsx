const Footer = () => {
  return (
    <div id="footer">
      <div
        id="contact"
        className="h-[674px] bg-customColors-fiord flex justify-center pt-[70px]"
      >
        <div className="container h-full bg-red-300 mx-4 flex flex-wrap flex-initial">
          <div className="bg-slate-200 basis-full md:basis-2/4 flex justify-center flex-initial">
            forms
          </div>
          <div className="bg-slate-200 basis-full md:basis-2/4 flex justify-center flex-initial">
            contacts
          </div>
        </div>
      </div>
      <br />
      <div className="h-[674px] bg-customColors-fiord"></div>
    </div>
  );
};

export default Footer;
