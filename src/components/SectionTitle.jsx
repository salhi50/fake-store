import { memo } from "react";

const SectionTitle = memo(function ({ children }) {
    return (
        <h4 className="border-bottom bg-light p-3">
            { children }
        </h4>
    )
})

export default SectionTitle;