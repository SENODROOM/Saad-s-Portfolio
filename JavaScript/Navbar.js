let WebsiteName = "Saad's Portfolio"
let Option1 = "Home"
let Option1link = "index.html"
let Option2 = "Tutorials"
let Option2link = "Tutorials.html"
let Option3 = "Courses"
let Option3link = "Courses.html"
let Option4 = "Projects"
let Option4Link = "Projects.html"
let Option5 = "Contact Me"
let NavbarHTML =
`
<nav>
    <div class="left">
        Saad's Portfolio
    </div>
    <div class="right">
        <ul>
            <li>
                <a href="${Option1link}">
                    ${Option1}
                </a>
            </li>
            <li>
                <a href="${Option2link}">
                    ${Option2}
                </a>
            </li>
            <li>
                <a href="${Option3link}">
                    ${Option3}
                </a>
            </li>
            <li>
                <a href="${Option4Link}">
                    ${Option4}
                </a>
            </li>
            <li>
                <a href="#">
                    ${Option5}
                </a>
            </li>
        </ul>
    </div>
</nav>
`
document.body.innerHTML = NavbarHTML;