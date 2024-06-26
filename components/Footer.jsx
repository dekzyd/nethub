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
      {/* about, solutions, products, resources links */}
      <div className="bg-customColors-dune flex justify-center">
        <div className="container">
          <div id="links" className="h-[552px] pt-16 px-3">
            <div
              id="links-container"
              className="container h-full flex flex-wrap"
            >
              <div className="linkCont bg-slate-100">About</div>
              <div className="linkCont bg-slate-200">Solutions</div>
              <div className="linkCont bg-slate-300">Products</div>
              <div className="linkCont bg-slate-400">Resources</div>
            </div>
          </div>

          <div id="privacy-policy" className="h-[275.20px] pt-16">
            <div className="bg-red-300 h-full container flex flex-col items-center">
              <h2>Helping tacos</h2>
              <p>coming soon</p>
              <div className="flex justify-around">
                <p>
                  <span>icon</span> texts 1 ooh now
                </p>
                <p>
                  <span>icon</span> texts 2 ooh now
                </p>
                <p>
                  <span>icon</span> texts 3 ooh now
                </p>
                <p>
                  <span>icon</span> texts 4 ooh now
                </p>
              </div>
            </div>
          </div>

          <div id="bottom footer" className="h-[291px] pt-5 pb-20">
            <div className="bg-red-300 h-full container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
