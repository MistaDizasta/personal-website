function Navbar() {
    return (
        <header className="sticky top-0 z-20 flex h-16 border-b bg-base-bg/60 backdrop-blur border-base-border bg-black">
        <nav id="navbar" className="flex justify-between w-full items-center p-5">
            <img alt="foto dhiemas w-60 h-60 decoding-async" className="max-[480px]:w-8 style=color:transparent w-15 rounded-full" src="/dhiemas.jpg"></img>
            <div id="flex flex-col lg:flex-row gap-3 lg:gap-5 py-5 lg:py-1 items-baseline">
                <ul id="" className="flex justify-between gap-5 text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Portofolio</li>
                </ul>
            </div>
    </nav >
    </header>
    )
}

export default Navbar; 