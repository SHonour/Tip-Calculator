import up from "../assets/up.svg";
import down from "../assets/down.svg";


function PeopleSelector({ people, setPeople }) {
  return (
    <>
      <h2 className="mt-6.75  font-semibold text-[#7AAA8A] text-[13px] font-instrument leading-none tracking-normal">
        NUMBER OF PEOPLE
      </h2>
      <div className="mt-1.25 bg-[#1E3D2C] w-94.75 h-16.25 rounded-[13px] flex items-center">
        <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" ml-3.75"
        >
          <path
            d="M7 1V23M12 5H4.5C3.57174 5 2.6815 5.36875 2.02513 6.02513C1.36875 6.6815 1 7.57174 1 8.5C1 9.42826 1.36875 10.3185 2.02513 10.9749C2.6815 11.6313 3.57174 12 4.5 12H9.5C10.4283 12 11.3185 12.3687 11.9749 13.0251C12.6313 13.6815 13 14.5717 13 15.5C13 16.4283 12.6313 17.3185 11.9749 17.9749C11.3185 18.6313 10.4283 19 9.5 19H1"
            stroke="#E9A535"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="text-[21px] text-[#FFFFFF] ml-3.75 font-normal font-gabriela leading-none tracking-normal">{people}</span>
        <span className="ml-4 text-[13px] text-[#7AAA8A] font-instrument font-normal leading-none tracking-normal">people</span>
        <div className="ml-57.75 flex flex-col gap-6">
          <img
            src={up}
            alt=""
            className="cursor-pointer"
            onClick={()=>setPeople((prev) => prev + 1)}
          />
          <img
            src={down}
            alt=""
            className="cursor-pointer"
            onClick={()=>setPeople((prev) => Math.max(1, prev - 1))}
          />
        </div>
      </div>
    </>
  );
}

export default PeopleSelector;
