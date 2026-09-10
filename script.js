/* =====================================================
   JOBCONNECT - JOB PORTAL FRONTEND
   ===================================================== */


/* ================= JOB DATA ================= */

const jobs = [

    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Bangalore",
        type: "Full Time",
        experience: "0-2 Years",
        salary: "8 - 12 LPA",
        category: "Software Development",
        icon: "G"
    },

    {
        id: 2,
        title: "Data Scientist",
        company: "Microsoft",
        location: "Hyderabad",
        type: "Full Time",
        experience: "1-3 Years",
        salary: "10 - 16 LPA",
        category: "Data Science",
        icon: "M"
    },

    {
        id: 3,
        title: "React.js Developer",
        company: "Accenture",
        location: "Pune",
        type: "Full Time",
        experience: "0-2 Years",
        salary: "6 - 10 LPA",
        category: "Software Development",
        icon: "A"
    },

    {
        id: 4,
        title: "UI/UX Designer",
        company: "Adobe",
        location: "Noida",
        type: "Full Time",
        experience: "1-3 Years",
        salary: "7 - 11 LPA",
        category: "Design",
        icon: "A"
    },

    {
        id: 5,
        title: "Machine Learning Engineer",
        company: "TCS",
        location: "Kolkata",
        type: "Full Time",
        experience: "1-2 Years",
        salary: "7 - 12 LPA",
        category: "Data Science",
        icon: "T"
    },

    {
        id: 6,
        title: "Digital Marketing Executive",
        company: "Infosys",
        location: "Bangalore",
        type: "Full Time",
        experience: "0-2 Years",
        salary: "4 - 7 LPA",
        category: "Marketing",
        icon: "I"
    }

];


/* ================= SAVED JOBS ================= */

let savedJobs = [];


/* ================= DISPLAY JOBS ================= */

function displayJobs(jobList = jobs) {

    const container =
        document.getElementById("jobContainer");

    container.innerHTML = "";


    if (jobList.length === 0) {

        container.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
            ">
                <h3>No jobs found</h3>
                <p>
                    Try another job title or location.
                </p>
            </div>
        `;

        return;
    }


    jobList.forEach(function(job) {

        const isSaved =
            savedJobs.includes(job.id);


        const card =
            document.createElement("div");

        card.className = "job-card";


        card.innerHTML = `

            <div class="job-top">

                <div class="company-icon">
                    ${job.icon}
                </div>

                <button
                    class="save-btn"
                    onclick="saveJob(${job.id})"
                    title="Save Job"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>


            <h3>
                ${job.title}
            </h3>


            <p class="company-name">
                ${job.company}
            </p>


            <div class="job-info">

                <span class="job-tag">
                    📍 ${job.location}
                </span>

                <span class="job-tag">
                    💼 ${job.type}
                </span>

                <span class="job-tag">
                    👨‍💻 ${job.experience}
                </span>

            </div>


            <div class="job-footer">

                <span class="salary">
                    ${job.salary}
                </span>

                <button
                    class="apply-btn"
                    onclick="applyJob(${job.id})"
                >
                    Apply Now
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* ================= SEARCH JOBS ================= */

function searchJobs() {

    const keyword =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const location =
        document
            .getElementById("locationInput")
            .value
            .toLowerCase()
            .trim();


    const filteredJobs =
        jobs.filter(function(job) {

            const keywordMatch =
                job.title
                    .toLowerCase()
                    .includes(keyword) ||

                job.company
                    .toLowerCase()
                    .includes(keyword) ||

                job.category
                    .toLowerCase()
                    .includes(keyword);


            const locationMatch =
                job.location
                    .toLowerCase()
                    .includes(location);


            return keywordMatch && locationMatch;

        });


    displayJobs(filteredJobs);


    document
        .getElementById("jobs")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= CATEGORY FILTER ================= */

function filterCategory(category) {

    const filteredJobs =
        jobs.filter(function(job) {

            return job.category === category;

        });


    displayJobs(filteredJobs);


    document
        .getElementById("jobs")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= SHOW ALL JOBS ================= */

function showAllJobs() {

    displayJobs(jobs);

    document
        .getElementById("jobs")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= SAVE JOB ================= */

function saveJob(jobId) {

    if (savedJobs.includes(jobId)) {

        savedJobs =
            savedJobs.filter(function(id) {

                return id !== jobId;

            });

        alert("Job removed from saved jobs.");

    }

    else {

        savedJobs.push(jobId);

        alert("Job saved successfully!");

    }


    displayJobs();

}


/* ================= APPLY JOB ================= */

function applyJob(jobId) {

    const job =
        jobs.find(function(item) {

            return item.id === jobId;

        });


    if (!job) {
        return;
    }


    const confirmApply =
        confirm(
            "Apply for " +
            job.title +
            " at " +
            job.company +
            "?"
        );


    if (confirmApply) {

        alert(
            "Application submitted successfully!\n\n" +
            "Position: " +
            job.title +
            "\nCompany: " +
            job.company
        );

    }

}


/* ================= LOGIN MODAL ================= */

function openLogin() {

    document
        .getElementById("registerModal")
        .classList.remove("active");


    document
        .getElementById("loginModal")
        .classList.add("active");

}


/* ================= REGISTER MODAL ================= */

function openRegister() {

    document
        .getElementById("loginModal")
        .classList.remove("active");


    document
        .getElementById("registerModal")
        .classList.add("active");

}


/* ================= CLOSE MODAL ================= */

function closeModal() {

    document
        .getElementById("loginModal")
        .classList.remove("active");


    document
        .getElementById("registerModal")
        .classList.remove("active");

}


/* ================= SWITCH LOGIN ================= */

function switchToLogin() {

    openLogin();

}


/* ================= SWITCH REGISTER ================= */

function switchToRegister() {

    openRegister();

}


/* ================= LOGIN ================= */

function loginUser() {

    alert(
        "Login functionality will be connected to the backend later."
    );

}


/* ================= REGISTER ================= */

function registerUser() {

    const role =
        document
            .getElementById("userRole")
            .value;


    alert(
        "Account registration selected.\n\n" +
        "Role: " +
        role +
        "\n\nBackend will be connected in the next step."
    );

}


/* ================= CLOSE MODAL OUTSIDE ================= */

window.addEventListener(
    "click",
    function(event) {

        const loginModal =
            document.getElementById("loginModal");

        const registerModal =
            document.getElementById("registerModal");


        if (event.target === loginModal) {

            closeModal();

        }


        if (event.target === registerModal) {

            closeModal();

        }

    }
);


/* ================= INITIAL LOAD ================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayJobs();

    }
);