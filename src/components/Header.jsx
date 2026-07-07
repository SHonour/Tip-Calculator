import dollarsign from "../assets/dollar-sign.svg";

function Header() {
    return(
        <>
            <h1 className="text-[#7AAA8A] font-normal font-instrument leading-none tracking-normal"> <img src={dollarsign} alt="" className="w-2.5 h-4.5" />TIP CALCULATOR</h1>
            <h1 className="text-[#FFFFFF] font-normal text-4xl font-georama, mt-2.25 leading-none tracking-normal">Split the bill,</h1>
            <h1 className="text-[#FFFFFF] text-[64px] leading-none tracking-normal font-licorice font-normal mt-px">not the friendship.</h1>
        </>
    )
}

export default Header;