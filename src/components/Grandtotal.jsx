function Grandtotal ({ peopleNum, grandTotal  }) {
    return (
        <>
            <div className="w-94.75 h-16 bg-[#E9A535] rounded-lg mt-3.75 flex items-center pl-3.75 pr-8">
                <div>
                    <p className="font-medium text-[12px] font-instrument">GRAND TOTAL</p>
                    <p className="font-normal font-instrument text-[10px]">{peopleNum} * ${(grandTotal/peopleNum).toFixed(2)}</p>
                </div>
                <p className="font-normal text-[26px] font-gabriela ml-auto">${grandTotal.toFixed(2)}</p>
            </div>
        </>
    )
}

export default Grandtotal;