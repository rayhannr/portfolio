import Fade from 'react-reveal/Fade'

import Title from '../Title'
import Button from '../ButtonLink'

const About = () => (
    <div className="section flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-3/5">
            <Fade duration={500} distance="30px" fraction={0.4} bottom>
                <Title>About me</Title>
                <p className="text-small-content mt-5 lg:text-justify tracking-wide">
                Final year Computer Science student at Universitas Gadjah Mada and frontend developer proficient in React, 
                CSS, Tailwind, Javascript, and Typescript with 2 years of experience. I continuously learn new things 
                about web development and actively build a couple of projects by myself or with other developers.
            </p>
            </Fade>

            <ul className="mt-3 ml-4 text-small-content tracking-wide">
                <Fade duration={500} delay={150} distance="30px" fraction={0.4} bottom>
                    <li className="list-disc lg:text-justify tracking-wide">
                        💼 Right now, I’m working as a frontend developer in a new startup in my hometown, but still open for a better opportunity to work with and learn from more professional and skillful developers.
                    </li>
                </Fade>
                <Fade duration={500} delay={200} distance="30px" fraction={0.4} bottom>
                    <li className="list-disc lg:text-justify tracking-wide mt-3">
                        💻 I'm working as a freelance Python programmer as well to help non-IT students who conduct
                        researches in data science but unable to code.
                    </li>
                </Fade>
                <Fade duration={500} delay={300} distance="30px" fraction={0.4} bottom>
                    <li className="list-disc lg:text-justify tracking-wide mt-3">
                        📰 Currently, I'm conducting a research on NLP about author obfuscation in order to complete my coursework
                        at Computer Science.
                    </li>
                </Fade>
                <Fade duration={500} delay={400} distance="30px" fraction={0.4} bottom>
                    <li className="list-disc lg:text-justify tracking-wide mt-3">
                        🖌 Before diving into frontend development, I was familiar with designing using Adobe Photoshop and a little bit of Adobe XD.
                    </li>
                </Fade>
            </ul>
        </div>

        <Fade duration={500} delay={300} distance="30px" fraction={0.4} bottom>
            <div className="lg:w-2/5 text-center mt-5 lg:mt-0">
                <Button
                    link="https://drive.google.com/file/d/1o_b6Hitkxi8yl6pYk-sjQX-Iqe4NI7ma/view?usp=sharing"
                    color="bg-content text-background hover:bg-content-hover hover:text-background-hover"
                    className="mx-auto"
                >
                    Curriculum Vitae
                </Button>

                <Button
                    link="https://drive.google.com/drive/folders/1usHryLtaQ9slPXANH_drMIiN9RH-mEWR?usp=sharing"
                    color="bg-background text-content hover:bg-background-hover hover:text-content-hover"
                    className="mt-4 mx-auto"
                >
                    Design Portfolio
                </Button>
            </div>
        </Fade>
    </div>
)

export default About