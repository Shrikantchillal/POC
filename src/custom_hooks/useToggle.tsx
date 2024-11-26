import { useState } from "react"

export default function useToggle(defaultValue: any) {
    const [value, setValue] = useState(defaultValue)

    const toggleValue = (value: boolean) => {
        setValue((currentValue: any) =>
            typeof value === "boolean" ? value : !currentValue
        );
    }

    return [value, toggleValue]
}