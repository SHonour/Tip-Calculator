import TipButton from "./TipButton";

function Tip({ tip, setTip, customTip, setCustomTip, custom, setCustom}) {
  return (
    <div className="mt-6.75">
      <h1 className=" text-[#7AAA8A] font-semibold text-[13px] leading-none tracking-normal font-instrument ">
        TIP PERCENTAGE
      </h1>

      <div className="mt-2.75 grid grid-flow-col grid-cols-4 gap-3.5">
        {[10, 15, 20].map((pct) => (
          <TipButton
            key={pct}
            isActive={tip === pct}
            label={`${pct}%`}
            onClick={() => {
              setTip(pct);
              setCustom(false);
              setCustomTip("")
            }}
          />
        ))}
        <TipButton
          label={"custom"}
          isActive={tip === "custom"}
          onClick={() => {
            setCustom(true);
            setTip("custom");

          }}
        />
      </div>

      {custom && (
        <input
          type="number"
          value={customTip}
          className="w-94.75 h-16.25 rounded-[13px] border-none bg-[#1E3D2C] mt-1.25 pl-5 text-[#ffffff] text-[18px] font-normal"
          onChange={(e) => setCustomTip(e.target.value)}
        />
      )}
    </div>
  );
}

export default Tip;
