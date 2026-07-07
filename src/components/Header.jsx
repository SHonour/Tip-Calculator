import dollarsign from "../assets/dollar-sign.svg";

function Header() {
    return(
        <>
            <h1 className="flex items-center gap-[6px]"> <img src={dollarsign} alt="" className="w-2.5 h-4.5 border-[#0D2218] border-[2px] " /><span className="text-[#7AAA8A] font-normal font-instrument  text-[12px]">TIP CALCULATOR</span></h1>
            <h1 className="text-[#FFFFFF] font-normal text-4xl font-georama, mt-2.25">Split the bill,</h1>
            <h1 className="text-[#FFFFFF] text-[64px]  font-licorice font-normal mt-px">not the friendship.</h1>
        </>
    )
}

export default Header;