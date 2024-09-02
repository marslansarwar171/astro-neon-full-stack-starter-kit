import { useState } from "react"

const Button = () => {
    const [num, setNum] = useState(0);
    return <button className="text-blue-500" onClick={() => setNum((prev) => prev + 1)}>button {num}</button>
};

export default Button;