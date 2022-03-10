import { useState } from "react";

export default function CountButton() {
    const [count, setCount] = useState(0);
    return (
    <div>
        <button type="button" onClick={() => setCount( c2 => c2 + 1)}>
        count is: {count}
        </button>
    </div>

    )
}