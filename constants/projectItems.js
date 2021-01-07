class ProjectItem {
    constructor(title, description, date, image, tools, isReversed, projectLink, githubLink) {
        this.title = title
        this.description = description
        this.date = date
        this.image = image
        this.tools = tools
        this.isReversed = isReversed
        this.projectLink = projectLink
        this.githubLink = githubLink
    }
}

export const projectItems = [
    new ProjectItem(
        'converThings',
        'My very first project, a server-less string converter site. It can convert plain text to binary, binary to decimal, decimal to any base, and many more.',
        'November 2018',
        'project1.jpg',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        false,
        'https://rayhannr.github.io/converthings',
        'https://github.com/rayhannr/converthings'
    ),
    new ProjectItem(
        'BEM FEB UGM',
        "Wordpress site to display information and updates of BEM FEB UGM. I redesigned it by using custom CSS and installing plugins. I think the theme developer made some changes to its CSS class names, so now it doesn't look like the last time I redesigned it.",
        'January - February 2019',
        'project2.jpg',
        ['Wordpress', 'CSS'],
        true,
        'https://bem.feb.ugm.ac.id',
        null
    ),
    new ProjectItem(
        'Tic-Tac-Cok',
        "Tic-tac-toe game rebuilt from a vanilla HTML + CSS + JS project by Kyle Cook of Web Dev Simplified to React with additional features such as dark and light mode, undo one move, restart game, and reset score.",
        'January 2020',
        'project3.jpg',
        ['React', 'CSS'],
        false,
        'https://rayhannr.github.io/tic-tac-cok',
        'https://github.com/rayhannr/tic-tac-cok'
    ),
    new ProjectItem(
        'Peduli Corona',
        "A website to facilitate supply and demand process for medical goods during the early phase of COVID-19 pandemic in Yogyakarta. This was a project conducted by some lecturers in UGM and I joined this project as a coordinator of the frontend team. In this website, admin can determine the type of medical goods and track the supply and demand process. Hospitals can ask for the medical goods and donators can supply it. Any visitor can see what kind of goods that are being supplied and demanded. However, apperently the backend server is now off.",
        'March - July 2020',
        'project4.jpg',
        ['React', 'Tailwind', 'Redux', 'Rest API','Netlify'],
        true,
        'https://pedulicorona.site',
        'https://github.com/alfanadhya/Supply-Demand-RC19'
    ),
    new ProjectItem(
        'Logbook KKN-PPM UGM',
        "Since this website was deployed, the report of the Community Service Program, or in Bahasa is called Kuliah Kerja Nyata, is digitalized. Students participating the program can enter their daily activity report and later it will be automatically transformed into PDF-based document. The supervisor lecturers can also track their students' progress from here. This website was initially developed by two backend developers and me as the frontend developer. Note : it's only accessible to those who have the account granted by UGM.",
        'June - August 2020',
        'project5.jpg',
        ['Bootstrap', 'Sass', 'JS', 'CodeIgniter'],
        false,
        'http://periode2.kkn-ppm.id/',
        null
    )
]