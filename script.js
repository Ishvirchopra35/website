document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Data for dynamic content
    const sections = [
        {
            id: "profile",
            content: `
                <div class="section profile">
                    <img src="avatar.png" alt="Profile Picture" class="profile-img" style="width: 100px; border-radius: 50%;">
                    <h2>Ishvir CHopra</h2>
                    <p style="color: #00ff7f;">Software Developer</p>
                    <div>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-phone"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div>
                        <button class="btn">Download CV</button>
                        <button class="btn">Contact Me</button>
                    </div>
                </div>
            `
        },
        {
            id: "about-me",
            content: `
                <div class="section about-me">
                    <h3>About Me</h3>
                    <p>Hello! I’m <strong>Ishvir Chopra</strong>, a student and coding enthusiast from Caledon. Experienced in software, AI, and programming.</p>
                    <ul>
                        <li><span style="color: #00ff7f;">Initials:</span> ISC</li>
                        <li><span style="color: #00ff7f;">Residence:</span> CA</li>
                        <li><span style="color: #00ff7f;">Freelance:</span> Available</li>
                        <li><span style="color: #00ff7f;">Address:</span> Caledon, ON</li>
                    </ul>
                </div>
            `
        },
        {
            id: "skills",
            content: `
                <div class="section skills">
                    <h3>Skills</h3>
                    <p>placeholder<span style="color: #00ff7f;">90%</span></p>
                    <p>placeholder<span style="color: #00ff7f;">95%</span></p>
                    <p>placeholder<span style="color: #00ff7f;">85%</span></p>
                </div>
            `
        },
        {
            id: "resume",
            content: `
                <div class="section resume">
                    <h3>Resume</h3>
                    <p><strong>placeholder</strong></p>
                    <p>placeholder</p>
                </div>
            `
        }
    ];

    // Dynamically load sections
    sections.forEach(section => {
        const div = document.createElement("div");
        div.innerHTML = section.content;
        mainContent.appendChild(div);
    });

    // Sidebar interactivity
    const sidebarIcons = document.querySelectorAll(".sidebar-icons i");
    sidebarIcons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            alert(`You clicked on ${sections[index]?.id || "this section"}`);
        });
    });
});
