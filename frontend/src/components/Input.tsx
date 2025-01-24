interface InputProps {
    placeholder: string;
    reference?: React.RefObject<HTMLInputElement>;
}

export function Input({placeholder, reference}: InputProps) {
    return <div className={"w-full"}>
        <input ref={reference} placeholder={placeholder} type={"text"} className={"px-5 py-2 border rounded outline-none"}></input>
    </div>
}