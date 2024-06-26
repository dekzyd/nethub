const Footer = () => {
  return (
    <section id="footer">
      <div
        id="contact"
        className="h-[674px] bg-customColors-fiord flex justify-center pt-[70px]"
      >
        {/* footer container 1 */}
        <div className="container h-full bg-red-300 mx-4 flex flex-wrap flex-initial">
          <div className="bg-slate-300 basis-full md:basis-2/4 flex justify-center flex-initial">
            forms
          </div>
          <div className="bg-slate-200 basis-full md:basis-2/4 flex justify-center flex-initial">
            contacts
          </div>
        </div>
      </div>

      {/* footer container 2 */}
      <div className="h-[674px] bg-customColors-fiord flex justify-center pt-10 pb-20">
        <div className="container h-full bg-red-300 p-5">
          <h1>Meeting in Person</h1>
          <p>
            You can find our friendly and helpful PortaOne staff and sales
            representative across the globe. Looking to meet face-to-face? Set
            up a meeting by{" "}
            <span className="text-customColors-ecstacy">
              sending us a message
            </span>
          </p>
          {/* events, corporate offices, tech offices, representatives */}
          <div className="bg-slate-400 flex flex-wrap">
            <div className="bg-slate-100 ftflex">1</div>
            <div className="bg-slate-200 ftflex">2</div>
            <div className="bg-slate-300 ftflex">3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
