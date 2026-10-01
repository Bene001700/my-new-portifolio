function Header() {
  return (
    <>
      <header className="p-5 border-b border-border h-16 flex  items-center justify-between gap-5">
        <a className=" cursor-pointer relative text-lg font-font03 font-extrabold flex flex-col items-center text-foreground">
          <div>
            ES
            <span className="text-primary ">.</span>
          </div>
          <div className="w-full absolute h-px bg-primary mt-5.5 mr-0"></div>
        </a>
        <div className="gap-1 flex hover:bg-muted transition-colors duration-300 flex-col justify-center w-11 h-11 items-center rounded-full ">
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
