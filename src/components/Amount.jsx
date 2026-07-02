import dollarsign from "../assets/dollar-sign.svg";

function Amount({ bill, setBill }) {
  return (
    <>
      <p className="text-[13px] font-semibold font-instrument text-[#7AAA8A] mt-7.5 leading-none tracking-normal">
        BILL AMOUNT
      </p>

      <div className="relative">
        <img src={dollarsign} alt="" className="absolute top-6 left-3.75 font-gabriela"/>
        <input
          type="text"
          className="w-94.75 h-16.25 rounded-[13px] border-none bg-[#1E3D2C] mt-1.25 pl-10 text-[21px] text-[#FFFFFF]"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
    </>
  );
}

export default Amount;
