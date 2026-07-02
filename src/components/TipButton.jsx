function TipButton ({label, onClick, isActive }) {
    return (
        <button 
        className={` w-21 h-12 rounded-lg ${isActive ? 'bg-[#E9A535]' : 'bg-[#1E3D2C]'} text-[18px] text-[#FFFFFF] font-normal font-gabriela leading-none tracking-normal  `}
        onClick={onClick}
        >{label}</button>
    )
}

export default TipButton;