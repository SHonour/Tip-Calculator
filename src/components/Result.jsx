function Result({ totalTip, tipPerPerson, totalPerPerson }) {
  
 
  return (
    <>
      <div className="mt-6.75 flex  items-center">
        <div>
          <p className="text-[15px] text-[#F5EDE0DE] font-medium font-instrument leading-none tracking-normal">
            Tip per person
          </p>
          <p className="text-[12px] text-[#7AAA8A] font-instrument font-medium  mt-0.75 leading-none tracking-normal">
            ${totalTip.toFixed(2)} total tip
          </p>
        </div>
        <p className="ml-auto text-[26px] text-[#FFFFFF] font-normal font-bodoni leading-none tracking-normal">
          ${tipPerPerson.toFixed(2)}
        </p>
      </div>


      <div className="mt-4.5 flex items-center">
        <div>
          <p className="text-[15px] text-[#F5EDE0DE] font-medium font-instrument">
            Total per person
          </p>
          <p className="text-[12px] text-[#7AAA8A] font-medium leading-none tracking-normal mt-0.75 font-instrument">${totalTip.toFixed(2)} total tip</p>
        </div>
        <div className="ml-auto text-[26px] text-[#FFFFFF] font-normal font-bodoni leading-none tracking-normal">
          ${totalPerPerson.toFixed(2)}
        </div>
      </div>
    </>
  );
}

export default Result;
