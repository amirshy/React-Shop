import React from "react";
import { FiUsers } from "react-icons/fi";
function FeatureBox(props) {
    return (
        <div className="dark:bg-gray-700 bg-gray-300 p-9 rounded-md flex items-center flex-col justify-center">
            <span className="bg-red-500 !text-white rounded-full flex items-center justify-center w-10 h-10">
                {props.icon}
            </span>
            <h4 className="font-medium py-1.5">{props.title}</h4>
            <p className="text-sm dark:text-gray-300 text-gray-500 text-center">
                {props.description}
            </p>
        </div>
    );
}

export default FeatureBox;
