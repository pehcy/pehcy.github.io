const boxTranslateStyle: React.CSSProperties = {
  transform: 'matrix(6, 0, 0, 6, 137, -97)',
};

export default (): JSX.Element => {
  return (
    <div className="h-screen p-16">
      <div className="flex sm:flex-row flex-row z-40">
        <h1 className="text-9xl font-bold z-40">Hi!</h1>
        <h4 className="text-7xl font-semibold text-blue-600/100 sm:pt-[8rem] px-4 z-10">I'm Chee Yung</h4>
      </div>
      <div id="square-box"
        className="z-0 box-border w-5 h-5 
          border-solid border-black border-2 left-[577px] bg-transparent opacity-10"
        style={boxTranslateStyle}
      />
      <div className="font-semibold text-xl pl-5 w-3/5">
        <p className="pb-6">
          I'm a network software engineer who's interested 
          in various Linux distros and open source projects.
        </p>
        <p>
          Sometimes I also write blogs to share some knowledges,
          feel free to contact me via email.
        </p>
      </div>
      <div className="flex justify-center py-20">
        <div className="animate-bounce p-2 w-12 h-12 
          rounded-full items-center justify-center ring-2 ring-black flex"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}