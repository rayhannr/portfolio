import Fade from 'react-reveal/Fade'

import Title from '../Title'
import Skillset from '../Skillset'
import Tail from '../SVG/Tail'
import Python from '../SVG/Python'
import React from '../SVG/React'
import Github from '../SVG/Github'
import Netlify from '../SVG/Netlify'
import Vscode from '../SVG/Vscode'
import Bootstrap from '../SVG/Bootstrap'
import Sass from '../SVG/Sass'
import Jquery from '../SVG/Jquery'
import Wordpress from '../SVG/Wordpress'
import Photoshop from '../SVG/Photoshop'
import Xd from '../SVG/Xd'
import Typescript from '../SVG/Typescript'
import Next from '../SVG/Next'

const Skill = () => (
    <div className="p-8 pt-4 md:pt-10 md:px-16">
        <Fade duration={500} distance="30px" bottom>
            <Title>Skills</Title>
        </Fade>
        <div className="lg:max-w-7xl lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 lg:gap-x-6 mt-5">
            <Skillset delay={100} title="Actively used">
                <React />
                <Tail />
                <Python />
                <Vscode />
                <Github />
                <Netlify />
            </Skillset>

            <Skillset delay={200} title="Previously used">
                <Bootstrap />
                <Sass />
                <Jquery />
                <Wordpress />
                <Photoshop />
                <Xd />
            </Skillset>

            <Skillset delay={300} title="Recently learned">
                <Typescript />
                <Next />
            </Skillset>
        </div>
    </div>

)

export default Skill