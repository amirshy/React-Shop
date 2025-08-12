import React from "react";

function TitleSection({ title, description }) {
    return (
        <>
            <h3 className="text-center text-lg pb-3.5">{title}</h3>
            <p className="text-center min-w-48 pb-20 dark:text-gray-400 text-gray-600">
                {description}
            </p>
        </>
    );
}

export default TitleSection;
