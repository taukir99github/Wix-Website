export default function Input({label}){
    return(
        <>
        <div className="text-white  w-full">
            <p>{label}</p>
            <input type="text" className="bg-transparent border-b border-white w-full"/>
        </div>
        </>
    );
}