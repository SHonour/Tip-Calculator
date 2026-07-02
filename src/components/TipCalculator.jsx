import { useState } from "react";
import Amount from "./Amount";
import Tip from "./Tip";
import PeopleSelector from "./PeopleSelector";
import Result from "./Result";
import Grandtotal from "./Grandtotal";
import Divider from "./Divider";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(2);
  const [customTip, setCustomTip] = useState("");
  const [custom, setCustom] = useState(false);

  const activeTip = tip === "custom" ? parseFloat(customTip) || 0 : tip;
  const billNum = parseFloat(bill) || 0;
  const tipNum = parseFloat(activeTip) || 0;
  const peopleNum = parseFloat(people) || 1;

  const totalTip = (tipNum / 100) * billNum;
  const tipPerPerson = totalTip / peopleNum;
  const totalPerPerson = (billNum + totalTip) / peopleNum;
  const grandTotal = totalPerPerson * peopleNum;

  if (custom) {
    return (
      <div className="bg-[#162E20] w-107 h-155.25 rounded-3xl px-6 mt-1.75">
        <Amount bill={bill} setBill={setBill} />
        <Tip
          tip={tip}
          setTip={setTip}
          setCustomTip={setCustomTip}
          customTip={customTip}
          custom={custom}
          setCustom={setCustom}
        />
        <PeopleSelector people={people} setPeople={setPeople} />
        <Divider />
        <Result
          totalTip={totalTip}
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
        />
        <Grandtotal peopleNum={peopleNum} grandTotal={grandTotal} />
      </div>
    );
  } else {
    return (
      <div className="bg-[#162E20] w-107 h-139 rounded-3xl px-6 mt-1.75">
        <Amount bill={bill} setBill={setBill} />
        <Tip
          tip={tip}
          setTip={setTip}
          setCustomTip={setCustomTip}
          customTip={customTip}
          custom={custom}
          setCustom={setCustom}
        />
        <PeopleSelector people={people} setPeople={setPeople} />
        <Divider />
        <Result
          totalTip={totalTip}
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
        />
        <Grandtotal peopleNum={peopleNum} grandTotal={grandTotal} />
      </div>
    );
  }
}

export default TipCalculator;
