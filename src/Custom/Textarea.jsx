export default function Textarea({label}){
    return(
        <>
        <div className="text-white w-full">
            <p>{label}</p>
            <textarea className="bg-transparent border-b border-white w-full"></textarea>
        </div>
        </>
    );
}
