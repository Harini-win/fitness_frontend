import React, { useState } from "react";
const Progress = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative bg-[url('/img.jpg')] flex flex-col">
            
            <div className="justify-center mb-8 relative z-20 text-white text-4xl font-bold">
                <h>Power BI Dashboard</h>
            </div>
            <div className="relative z-10 bg-transparent rounded-2xl shadow-lg p-6 w-full max-w-4xl h-[500px] border-2 border-white/20 backdrop-blur-[20px] shadow-black/20 text-white">
            <h className="text-white text-4xl font-bold absolute left-70 top-50">To be updated soon!</h>
            </div>
        </div>
    );
}

export default Progress;