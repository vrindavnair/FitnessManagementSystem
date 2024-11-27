import React from 'react'
import one from '../../assets/1.jpg'

const About = () => {
    return (

        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
            <div className="w-11/12 max-w-6xl flex flex-col lg:flex-row items-center gap-12">
                {/* Left Section (Text) */}
                <div className="text-center lg:text-left flex-1 space-y-6">
                    <h1 className="text-4xl font-bold text-blue-600">
                        Key Benefits of Fitness App Development Solutions:
                    </h1>
                    <ul className="space-y-4 text-lg text-gray-700">
                        {[
                            'Customization',
                            'Scalability',
                            'Integration',
                            'Security',
                            'Ownership',
                            'Competitive Advantage',
                            'Cost-effectiveness',
                            'Convenience',
                            'Engagement',
                            'Data Collection',
                            'Monetization',
                            'Brand Awareness'
                        ].map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-xl font-semibold">•</span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section (Image and Icons) */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-[350px] h-[650px]">
                        {/* Phone Image */}
                        <img src="one.jpg" alt="Fitness App" className="w-full h-full object-cover rounded-xl" />
                        {/* App Data Icons */}
                        <div className="absolute top-8 left-12 text-white text-xl">
                            <div className="bg-blue-600 p-2 rounded-full mb-3">23:10</div>
                            <div className="flex gap-3">
                                <div className="bg-blue-500 p-2 rounded-full">💪</div>
                                <div className="bg-green-500 p-2 rounded-full">🔥</div>
                                <div className="bg-red-500 p-2 rounded-full">⏱</div>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        </div>


    )
}

export default About
