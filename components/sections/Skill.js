import Title from '../Title'

import Tail from '../SVG/Tail'
import React from '../SVG/React'
import Netlify from '../SVG/Netlify'

const Skill = () => (
    <div className="p-8 pt-4 md:pt-10 md:px-16">
        <Title>Skills</Title>
        <div className="flex flex-col md:flex-row md:items-center mt-5">
            <div>
                <h2 className="text-lg font-semibold text-gray-900">Actively used</h2>
                <div className="flex flex-row flex-wrap mt-3">
                    <React />
                    <Tail />
                    <Netlify />
                </div>
            </div>
        </div>
    </div>

)

export default Skill