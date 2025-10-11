import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;  
};

// 🧩 Explanation (step by step):

// Every time the user types, this hook waits a few milliseconds (e.g. 500 ms).

// If the user stops typing, it updates the debounced value.

// If the user keeps typing quickly, it cancels the previous timer.

// This ensures API calls only happen when the user pauses typing.