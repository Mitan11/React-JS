import React, { useState } from 'react'; // Import useState from React

function ButtonBody() {
    const [color, setColor] = useState("slate-300"); // Initialize state for button color

    return (
        <>
            <div className={`w-screen h-screen bg-${color} flex justify-center items-center`}>
                <div className="flex bg-white w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl">
                    <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-3 py-3 flex justify-center items-center">
                        <button
                            title="Go to the home page"
                            className={`bg-black border-2 p-2.5 rounded-full text-sm text-light-blue-light font-medium inline-flex items-center mx-2 hover:shadow-button-flat-pressed focus:outline-none active:shadow-button-flat-pressed`}
                            onClick={() => setColor("black")}
                        >
                        </button>
                        <button
                            title="Go to the home page"
                            className={`bg-red-600 border-2 p-2.5 rounded-full text-sm text-light-blue-light font-medium inline-flex items-center mx-2 hover:shadow-button-flat-pressed focus:outline-none active:shadow-button-flat-pressed`}
                            onClick={() => setColor("red-600")}
                        >
                        </button>
                        <button
                            title="Go to the home page"
                            className={`bg-blue-600 border-2 p-2.5 rounded-full text-sm text-light-blue-light font-medium inline-flex items-center mx-2 hover:shadow-button-flat-pressed focus:outline-none active:shadow-button-flat-pressed`}
                            onClick={() => setColor("blue-600")}
                        >
                        </button>
                        <button
                            title="Go to the home page"
                            className={`bg-green-500 border-2 p-2.5 rounded-full text-sm text-light-blue-light font-medium inline-flex items-center mx-2 hover:shadow-button-flat-pressed focus:outline-none active:shadow-button-flat-pressed`}
                            onClick={() => setColor("green-500")}
                        >
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ButtonBody;
