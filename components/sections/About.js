import Fade from 'react-reveal/Fade'

import Title from '../Title'
import Button from '../ButtonLink'

const About = () => (
    <div className="p-8 pt-4 md:pt-10 md:px-16 flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-3/5">
            <Fade duration={500} distance="30px" bottom>
                <Title>About me</Title>
                <p className="text-gray-600 mt-5 lg:text-justify tracking-wide">
                    I am a final year Computer Science student at Gadjah Mada University (UGM) and React.js enthusiast
                    with two years of experience in frontend development. I continuously learn new things about web
                    development and actively build a couple of projects by myself or with other developers.
            </p>
            </Fade>
            
            <ul className="mt-3 ml-4 text-gray-600 tracking-wide">
                <Fade duration={500} delay={100} distance="30px" bottom>
                    <li className="list-disc lg:text-justify tracking-wide">
                        💼 Right now, I’m working as a frontend developer in a new startup in my hometown, but still open for a better opportunity to work with and learn from more professional and skillful developers.
                    </li>
                </Fade>
                <Fade duration={500} delay={200} distance="30px" bottom>
                    <li className="list-disc lg:text-justify tracking-wide mt-3">
                        💻 I'm working as a freelance Python programmer as well to help non-IT students who conduct
                        researches in data science but unable to code.
                    </li>
                </Fade>
                <Fade duration={500} delay={300} distance="30px" bottom>
                    <li className="list-disc lg:text-justify tracking-wide mt-3">
                        📰 Currently, I'm conducting a research on NLP about author obfuscation in order to complete my coursework
                        at Computer Science.
                    </li>
                </Fade>
                <Fade duration={500} delay={400} distance="30px" bottom>
                    <li className="list-disc lg:text-justify tracking-wide mt-3">
                        🖌 Before diving into frontend development, I was familiar with designing using Adobe Photoshop and a little bit of Adobe XD.
                    </li>
                </Fade>
            </ul>
        </div>

        <Fade duration={500} delay={300} distance="30px" bottom>
            <div className="lg:w-2/5 text-center mt-5 lg:mt-0">
                <Button
                    link="https://drive.google.com/file/d/1Gcd8guXjFAtYstrqtcW840JUkhTsAaUi/view?usp=sharing"
                    color="bg-gray-900 text-gray-100 hover:bg-gray-800"
                    className="mx-auto"
                >
                    Curriculum Vitae
            </Button>

                <Button
                    link="https://drive.google.com/drive/folders/1usHryLtaQ9slPXANH_drMIiN9RH-mEWR?usp=sharing"
                    color="bg-gray-100 text-gray-900 hover:bg-gray-200"
                    className="mt-4 mx-auto"
                >
                    Design Portfolio
            </Button>
            </div>
        </Fade>
    </div>
)

export default About