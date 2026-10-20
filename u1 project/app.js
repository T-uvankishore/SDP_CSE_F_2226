const jobs = [
  {
    id: 1,
    title: "Graduate Engineer Trainee",
    company: "Tata Consultancy Services",
    initials: "TCS",
    mark: "mark-blue",
    location: "Bengaluru, Karnataka",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 450000,
    salaryLabel: "₹3.5–4.5 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative entry-level technology role for graduates interested in software delivery, enterprise platforms, and structured training.",
    tags: ["Software", "Training", "Fresh graduates"],
    url: "https://www.tcs.com/careers"
  },
  {
    id: 2,
    title: "Systems Engineer",
    company: "Infosys",
    initials: "I",
    mark: "mark-green",
    location: "Mysuru, Karnataka",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 400000,
    salaryLabel: "₹3.5–4 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative graduate engineering position focused on application development, client projects, and foundational technical learning.",
    tags: ["Engineering", "Applications", "Graduate"],
    url: "https://www.infosys.com/careers/"
  },
  {
    id: 3,
    title: "Project Engineer - Graduate",
    company: "Wipro",
    initials: "W",
    mark: "mark-lime",
    location: "Hyderabad, Telangana",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 450000,
    salaryLabel: "₹3.5–4.5 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative early-career technology role supporting project teams with software implementation and customer solutions.",
    tags: ["IT services", "Project work", "Training"],
    url: "https://careers.wipro.com/"
  },
  {
    id: 4,
    title: "Graduate Software Developer",
    company: "HCLTech",
    initials: "HCL",
    mark: "mark-blue",
    location: "Noida, Uttar Pradesh",
    work: "On-site",
    type: "Graduate programme",
    area: "Technology",
    salary: 450000,
    salaryLabel: "₹3.5–4.5 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative graduate opening to learn software development practices while working with experienced delivery teams.",
    tags: ["Development", "Cloud", "Graduate"],
    url: "https://www.hcltech.com/careers"
  },
  {
    id: 5,
    title: "Associate Software Engineer",
    company: "Tech Mahindra",
    initials: "TM",
    mark: "mark-coral",
    location: "Pune, Maharashtra",
    work: "Hybrid",
    type: "Entry-level",
    area: "Technology",
    salary: 400000,
    salaryLabel: "₹3–4 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative entry-level engineering role contributing to application support and digital transformation projects.",
    tags: ["Software", "Digital", "Entry-level"],
    url: "https://careers.techmahindra.com/"
  },
  {
    id: 6,
    title: "Graduate Engineer - Manufacturing",
    company: "Reliance Industries",
    initials: "R",
    mark: "mark-rose",
    location: "Jamnagar, Gujarat",
    work: "On-site",
    type: "Graduate programme",
    area: "Technology",
    salary: 600000,
    salaryLabel: "₹5–6 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative graduate engineering position supporting operations, process improvement, and large-scale industrial projects.",
    tags: ["Engineering", "Operations", "Manufacturing"],
    url: "https://careers.ril.com/"
  },
  {
    id: 7,
    title: "Supply Chain Analyst",
    company: "Flipkart",
    initials: "F",
    mark: "mark-yellow",
    location: "Bengaluru, Karnataka",
    work: "Hybrid",
    type: "Entry-level",
    area: "Business",
    salary: 700000,
    salaryLabel: "₹5–7 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative analyst position working with operations data, fulfillment teams, and planning processes.",
    tags: ["Analytics", "Operations", "Supply chain"],
    url: "https://www.flipkartcareers.com/"
  },
  {
    id: 8,
    title: "Junior Product Designer",
    company: "Zomato",
    initials: "Z",
    mark: "mark-coral",
    location: "Gurugram, Haryana",
    work: "Hybrid",
    type: "Entry-level",
    area: "Design",
    salary: 900000,
    salaryLabel: "₹7–9 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative product design role partnering with product and engineering teams to improve customer experiences.",
    tags: ["Product design", "UX / UI", "Digital"],
    url: "https://www.zomato.com/careers"
  },
  {
    id: 9,
    title: "Graduate Civil Engineer",
    company: "Larsen & Toubro",
    initials: "L&T",
    mark: "mark-green",
    location: "Chennai, Tamil Nadu",
    work: "On-site",
    type: "Graduate programme",
    area: "Technology",
    salary: 550000,
    salaryLabel: "₹4.5–5.5 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative engineering position supporting infrastructure project teams with planning, site coordination, and delivery.",
    tags: ["Civil engineering", "Infrastructure", "Projects"],
    url: "https://www.larsentoubro.com/careers/"
  },
  {
    id: 10,
    title: "Relationship Manager Trainee",
    company: "ICICI Bank",
    initials: "IC",
    mark: "mark-blue",
    location: "Mumbai, Maharashtra",
    work: "On-site",
    type: "Graduate programme",
    area: "Business",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative banking trainee role focused on customer relationships, financial products, and guided professional development.",
    tags: ["Banking", "Customer service", "Training"],
    url: "https://www.icicicareers.com/"
  },
  {
    id: 11,
    title: "Research Associate - Life Sciences",
    company: "Dr. Reddy's Laboratories",
    initials: "DR",
    mark: "mark-lime",
    location: "Hyderabad, Telangana",
    work: "On-site",
    type: "Entry-level",
    area: "Science",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative early-career science position supporting laboratory research and quality processes.",
    tags: ["Life sciences", "Research", "Laboratory"],
    url: "https://www.drreddys.com/careers"
  },
  {
    id: 12,
    title: "Graduate Engineer - Vehicle Systems",
    company: "Tata Motors",
    initials: "T",
    mark: "mark-yellow",
    location: "Pune, Maharashtra",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 650000,
    salaryLabel: "₹5–6.5 LPA (sample)",
    posted: "Sample role",
    summary: "An illustrative graduate engineering opportunity contributing to vehicle development, testing, and production projects.",
    tags: ["Automotive", "Engineering", "Graduate"],
    url: "https://www.tatamotors.com/careers/"
  },
  {
    id: 13,
    title: "Associate Software Engineer",
    company: "Accenture India",
    initials: "A",
    mark: "mark-rose",
    location: "Bengaluru, Karnataka",
    work: "Hybrid",
    type: "Entry-level",
    area: "Technology",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative graduate technology role in application development, testing, and digital delivery.",
    tags: ["IT services", "Software", "Graduate"],
    url: "https://www.accenture.com/in-en/careers"
  },
  {
    id: 14,
    title: "Programmer Analyst Trainee",
    company: "Cognizant",
    initials: "C",
    mark: "mark-blue",
    location: "Chennai, Tamil Nadu",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 450000,
    salaryLabel: "₹3.5–4.5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative trainee role for graduates starting in software engineering and client delivery.",
    tags: ["IT services", "Programming", "Trainee"],
    url: "https://careers.cognizant.com/india-en/"
  },
  {
    id: 15,
    title: "Software Engineer - Graduate",
    company: "Capgemini India",
    initials: "C",
    mark: "mark-green",
    location: "Pune, Maharashtra",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 450000,
    salaryLabel: "₹3.5–4.5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative early-career software position supporting enterprise technology projects.",
    tags: ["IT services", "Software", "Graduate"],
    url: "https://www.capgemini.com/in-en/careers/"
  },
  {
    id: 16,
    title: "Graduate Engineer Trainee",
    company: "LTIMindtree",
    initials: "LT",
    mark: "mark-lime",
    location: "Mumbai, Maharashtra",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 450000,
    salaryLabel: "₹3.5–4.5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative graduate role in technology consulting, software delivery, and enterprise systems.",
    tags: ["IT services", "Consulting", "Trainee"],
    url: "https://www.ltimindtree.com/careers/"
  },
  {
    id: 17,
    title: "Associate Software Developer",
    company: "Mphasis",
    initials: "M",
    mark: "mark-blue",
    location: "Pune, Maharashtra",
    work: "Hybrid",
    type: "Entry-level",
    area: "Technology",
    salary: 450000,
    salaryLabel: "₹3.5–4.5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative entry-level development position supporting cloud and enterprise application teams.",
    tags: ["IT services", "Cloud", "Development"],
    url: "https://www.mphasis.com/home/careers.html"
  },
  {
    id: 18,
    title: "Graduate Software Engineer",
    company: "Persistent Systems",
    initials: "P",
    mark: "mark-coral",
    location: "Pune, Maharashtra",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative graduate engineering role in product development, cloud, and digital engineering.",
    tags: ["Software", "Product engineering", "Graduate"],
    url: "https://www.persistent.com/careers/"
  },
  {
    id: 19,
    title: "Operations Analyst - Early Career",
    company: "Amazon India",
    initials: "a",
    mark: "mark-yellow",
    location: "Hyderabad, Telangana",
    work: "On-site",
    type: "Entry-level",
    area: "Business",
    salary: 700000,
    salaryLabel: "₹5–7 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative early-career role using operational data to support teams and improve customer experiences.",
    tags: ["Operations", "Analytics", "Amazon"],
    url: "https://www.amazon.jobs/en/locations/india"
  },
  {
    id: 20,
    title: "Software Engineer - University Graduate",
    company: "Google India",
    initials: "G",
    mark: "mark-green",
    location: "Bengaluru, Karnataka",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 1800000,
    salaryLabel: "Compensation varies (sample)",
    posted: "Sample role",
    summary: "Illustrative software engineering role for recent graduates. Check the employer site for current graduate openings.",
    tags: ["Software", "Engineering", "Google"],
    url: "https://www.google.com/about/careers/applications/locations/bengaluru/"
  },
  {
    id: 21,
    title: "Software Engineer - University Graduate",
    company: "Microsoft India",
    initials: "MS",
    mark: "mark-blue",
    location: "Hyderabad, Telangana",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 1600000,
    salaryLabel: "Compensation varies (sample)",
    posted: "Sample role",
    summary: "Illustrative graduate software engineering role in cloud, developer tools, or product teams.",
    tags: ["Software", "Cloud", "Microsoft"],
    url: "https://jobs.careers.microsoft.com/global/en/search"
  },
  {
    id: 22,
    title: "Associate Technical Consultant",
    company: "IBM India",
    initials: "IBM",
    mark: "mark-blue",
    location: "Bengaluru, Karnataka",
    work: "Hybrid",
    type: "Entry-level",
    area: "Technology",
    salary: 700000,
    salaryLabel: "₹5–7 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative early-career technology consulting role across software, data, and cloud projects.",
    tags: ["Consulting", "Technology", "IBM"],
    url: "https://www.ibm.com/careers/in-en/"
  },
  {
    id: 23,
    title: "Business Analyst - Early Career",
    company: "Swiggy",
    initials: "S",
    mark: "mark-coral",
    location: "Bengaluru, Karnataka",
    work: "Hybrid",
    type: "Entry-level",
    area: "Business",
    salary: 800000,
    salaryLabel: "₹6–8 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative analyst role working with business data, operations, and cross-functional product teams.",
    tags: ["Analytics", "Business", "Swiggy"],
    url: "https://careers.swiggy.com/"
  },
  {
    id: 24,
    title: "Graduate Software Engineer",
    company: "PhonePe",
    initials: "P",
    mark: "mark-lime",
    location: "Bengaluru, Karnataka",
    work: "Hybrid",
    type: "Entry-level",
    area: "Technology",
    salary: 1200000,
    salaryLabel: "₹8–12 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative software role in digital payments and financial technology. Check the careers site for actual openings.",
    tags: ["Fintech", "Software", "PhonePe"],
    url: "https://www.phonepe.com/careers/"
  },
  {
    id: 25,
    title: "Product Support Associate",
    company: "Paytm",
    initials: "P",
    mark: "mark-blue",
    location: "Noida, Uttar Pradesh",
    work: "Hybrid",
    type: "Entry-level",
    area: "Business",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative early-career position supporting digital payments products and customer operations.",
    tags: ["Fintech", "Payments", "Paytm"],
    url: "https://paytm.com/careers/"
  },
  {
    id: 26,
    title: "Graduate Relationship Officer",
    company: "HDFC Bank",
    initials: "H",
    mark: "mark-green",
    location: "Mumbai, Maharashtra",
    work: "On-site",
    type: "Graduate programme",
    area: "Business",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative banking graduate role in customer relationships, branch operations, and financial services.",
    tags: ["Banking", "Finance", "HDFC"],
    url: "https://www.hdfcbank.com/personal/about-us/careers"
  },
  {
    id: 27,
    title: "Assistant Manager - Graduate",
    company: "Axis Bank",
    initials: "AX",
    mark: "mark-coral",
    location: "Mumbai, Maharashtra",
    work: "On-site",
    type: "Graduate programme",
    area: "Business",
    salary: 550000,
    salaryLabel: "₹4.5–5.5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative entry-level banking role with exposure to customer service and financial products.",
    tags: ["Banking", "Finance", "Axis"],
    url: "https://www.axisbank.com/careers"
  },
  {
    id: 28,
    title: "Probationary Officer",
    company: "State Bank of India",
    initials: "SBI",
    mark: "mark-blue",
    location: "Mumbai, Maharashtra",
    work: "On-site",
    type: "Graduate programme",
    area: "Business",
    salary: 800000,
    salaryLabel: "Pay varies by role (sample)",
    posted: "Sample role",
    summary: "Illustrative public-sector banking career path. Confirm recruitment notices, eligibility, and dates on the official site.",
    tags: ["Banking", "SBI", "Public sector"],
    url: "https://sbi.co.in/web/careers"
  },
  {
    id: 29,
    title: "Graduate Research Associate",
    company: "Sun Pharmaceutical Industries",
    initials: "SP",
    mark: "mark-lime",
    location: "Vadodara, Gujarat",
    work: "On-site",
    type: "Entry-level",
    area: "Science",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative early-career pharmaceutical science role supporting laboratory, research, or quality teams.",
    tags: ["Pharma", "Research", "Sun Pharma"],
    url: "https://sunpharma.com/careers/"
  },
  {
    id: 30,
    title: "Biotechnology Research Associate",
    company: "Biocon",
    initials: "B",
    mark: "mark-green",
    location: "Bengaluru, Karnataka",
    work: "On-site",
    type: "Entry-level",
    area: "Science",
    salary: 500000,
    salaryLabel: "₹4–5 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative life-sciences role supporting research and development in biotechnology.",
    tags: ["Biotech", "Research", "Laboratory"],
    url: "https://www.biocon.com/careers/"
  },
  {
    id: 31,
    title: "Management Trainee - Marketing",
    company: "Hindustan Unilever",
    initials: "HUL",
    mark: "mark-yellow",
    location: "Mumbai, Maharashtra",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Business",
    salary: 1000000,
    salaryLabel: "Compensation varies (sample)",
    posted: "Sample role",
    summary: "Illustrative graduate marketing role. Check the employer site for current early-career programmes and eligibility.",
    tags: ["Marketing", "HUL", "Consumer goods"],
    url: "https://www.hul.co.in/careers/"
  },
  {
    id: 32,
    title: "Graduate Engineer Trainee",
    company: "Mahindra & Mahindra",
    initials: "M",
    mark: "mark-coral",
    location: "Mumbai, Maharashtra",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Technology",
    salary: 600000,
    salaryLabel: "₹5–6 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative engineering graduate role in automotive, manufacturing, or mobility teams.",
    tags: ["Automotive", "Engineering", "Mahindra"],
    url: "https://www.mahindra.com/careers"
  },
  {
    id: 33,
    title: "Graduate Engineer - Manufacturing",
    company: "Maruti Suzuki India",
    initials: "MS",
    mark: "mark-blue",
    location: "Gurugram, Haryana",
    work: "On-site",
    type: "Graduate programme",
    area: "Technology",
    salary: 600000,
    salaryLabel: "₹5–6 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative graduate engineering position in vehicle manufacturing and production operations.",
    tags: ["Automotive", "Manufacturing", "Maruti"],
    url: "https://www.marutisuzuki.com/corporate/careers"
  },
  {
    id: 34,
    title: "Graduate Finance Associate",
    company: "Bajaj Finserv",
    initials: "BF",
    mark: "mark-green",
    location: "Pune, Maharashtra",
    work: "Hybrid",
    type: "Entry-level",
    area: "Business",
    salary: 600000,
    salaryLabel: "₹5–6 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative graduate role in financial services, business operations, or customer analytics.",
    tags: ["Finance", "Analytics", "Bajaj"],
    url: "https://www.bajajfinserv.in/careers"
  },
  {
    id: 35,
    title: "Graduate Engineer Trainee",
    company: "Adani Group",
    initials: "A",
    mark: "mark-yellow",
    location: "Ahmedabad, Gujarat",
    work: "On-site",
    type: "Graduate programme",
    area: "Technology",
    salary: 600000,
    salaryLabel: "₹5–6 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative engineering position across infrastructure, energy, logistics, or operations teams.",
    tags: ["Engineering", "Infrastructure", "Adani"],
    url: "https://www.adani.com/careers"
  },
  {
    id: 36,
    title: "Graduate Management Trainee",
    company: "Godrej Industries Group",
    initials: "G",
    mark: "mark-lime",
    location: "Mumbai, Maharashtra",
    work: "Hybrid",
    type: "Graduate programme",
    area: "Business",
    salary: 600000,
    salaryLabel: "₹5–6 LPA (sample)",
    posted: "Sample role",
    summary: "Illustrative early-career role in business operations, sales, or consumer product teams.",
    tags: ["Consumer goods", "Business", "Godrej"],
    url: "https://www.godrejindustries.com/careers"
  }
];

const list = document.querySelector("#job-list");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const keywordSearch = document.querySelector("#keyword-search");
const locationSearch = document.querySelector("#location-search");
const savedCount = document.querySelector("#saved-count");
const allTab = document.querySelector("#all-tab");
const savedTab = document.querySelector("#saved-tab");
const sortSelect = document.querySelector("#sort-select");
const accountButton = document.querySelector("#account-button");
const accountDialog = document.querySelector("#account-dialog");
const loginStep = document.querySelector("#login-step");
const profileStep = document.querySelector("#profile-step");
const accountEmail = document.querySelector("#account-email");
const savedJobs = new Set();
let showSaved = false;
let profile = loadProfile();

function loadProfile() {
  try {
    return JSON.parse(localStorage.getItem("firststep-profile") || "null");
  } catch {
    return null;
  }
}

function checkedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function getVisibleJobs() {
  const keyword = keywordSearch.value.trim().toLowerCase();
  const location = locationSearch.value.trim().toLowerCase();
  const types = checkedValues("type");
  const areas = checkedValues("area");
  const workStyles = checkedValues("work");

  const visible = jobs.filter((job) => {
    const searchable = [job.title, job.company, job.summary, job.area, ...job.tags].join(" ").toLowerCase();
    return (!showSaved || savedJobs.has(job.id))
      && (!keyword || searchable.includes(keyword))
      && (!location || job.location.toLowerCase().includes(location))
      && (!types.length || types.includes(job.type))
      && (!areas.length || areas.includes(job.area))
      && (!workStyles.length || workStyles.includes(job.work));
  });

  if (sortSelect.value === "salary") visible.sort((first, second) => second.salary - first.salary);
  if (sortSelect.value === "company") visible.sort((first, second) => first.company.localeCompare(second.company));
  return visible;
}

function jobCard(job, index) {
  const card = document.createElement("article");
  card.className = "job-card";
  card.style.animationDelay = `${Math.min(index, 5) * 35}ms`;
  const isSaved = savedJobs.has(job.id);
  const tags = [job.type, ...job.tags.slice(0, 2)].map((tag, tagIndex) =>
    `<span class="job-tag${tagIndex === 0 ? " type-tag" : ""}">${tag}</span>`
  ).join("");

  card.innerHTML = `
    <div class="job-topline">
      <span class="company-mark ${job.mark}" aria-hidden="true">${job.initials}</span>
      <div class="job-title-block">
        <h3 class="job-title">${job.title}</h3>
        <p class="company-name">${job.company}</p>
      </div>
    </div>
    <button class="save-button${isSaved ? " is-saved" : ""}" type="button" aria-label="${isSaved ? "Remove saved job" : "Save job"}" aria-pressed="${isSaved}" data-save="${job.id}">${isSaved ? "Saved" : "Save"}</button>
    <p class="job-summary">${job.summary}</p>
    <div class="job-meta">
      <span class="meta-item"><span aria-hidden="true">⌖</span>${job.location}</span>
      <span class="meta-item"><span aria-hidden="true">◷</span>${job.salaryLabel}</span>
      <span class="meta-item">${job.work}</span>
      <span class="meta-dot" aria-hidden="true">·</span>
      <span class="meta-item">${job.posted}</span>
    </div>
    <div class="job-bottom">
      <div class="tag-list">${tags}</div>
      <a class="apply-link" href="${job.url}" target="_blank" rel="noopener noreferrer">Company site <span aria-hidden="true">↗</span></a>
    </div>`;
  return card;
}

function render() {
  const visibleJobs = getVisibleJobs();
  list.replaceChildren(...visibleJobs.map(jobCard));
  emptyState.hidden = visibleJobs.length > 0;
  const keyword = keywordSearch.value.trim();
  if (showSaved) {
    resultCount.innerHTML = `<strong>${visibleJobs.length}</strong> saved ${visibleJobs.length === 1 ? "opportunity" : "opportunities"}`;
  } else if (keyword) {
    resultCount.replaceChildren(
      document.createTextNode(`Showing ${visibleJobs.length} ${visibleJobs.length === 1 ? "result" : "results"} for `),
      Object.assign(document.createElement("strong"), { textContent: keyword })
    );
  } else {
    resultCount.innerHTML = `Showing <strong>${visibleJobs.length}</strong> of ${jobs.length} opportunities`;
  }
  savedCount.textContent = String(savedJobs.size);
  allTab.classList.toggle("is-active", !showSaved);
  savedTab.classList.toggle("is-active", showSaved);
  allTab.setAttribute("aria-pressed", String(!showSaved));
  savedTab.setAttribute("aria-pressed", String(showSaved));
  document.querySelector("#results-title").firstChild.textContent = showSaved ? "Your saved opportunities " : "Graduate opportunities across India ";
  accountButton.textContent = profile ? profile.name.split(" ")[0] : "Sign in";
  accountButton.setAttribute("aria-label", profile ? `Edit profile for ${profile.name}` : "Sign in and create your profile");
}

function showProfileForm() {
  loginStep.hidden = true;
  profileStep.hidden = false;
  document.querySelector("#profile-title").textContent = profile ? "Your graduate profile" : "Complete your profile";
  const form = document.querySelector("#profile-form");
  for (const [name, value] of Object.entries(profile || {})) {
    if (name === "email") continue;
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  }
  form.elements.namedItem("name").focus();
}

accountButton.addEventListener("click", () => {
  loginStep.hidden = Boolean(profile);
  profileStep.hidden = !profile;
  accountEmail.value = profile?.email || "";
  if (profile) showProfileForm();
  accountDialog.showModal();
  if (!profile) accountEmail.focus();
});

document.querySelector("#dialog-close").addEventListener("click", () => accountDialog.close());
accountDialog.addEventListener("click", (event) => {
  if (event.target === accountDialog) accountDialog.close();
});

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  profile = { ...(profile || {}), email: accountEmail.value.trim() };
  showProfileForm();
});

document.querySelector("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  profile = Object.fromEntries(formData.entries());
  profile.age = Number(profile.age);
  profile.graduationYear = Number(profile.graduationYear);
  profile.email = accountEmail.value.trim() || profile.email;
  localStorage.setItem("firststep-profile", JSON.stringify(profile));
  render();
  accountDialog.close();
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  render();
  document.querySelector("#job-results").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".filters input").forEach((input) => input.addEventListener("change", render));
keywordSearch.addEventListener("input", render);
locationSearch.addEventListener("input", render);
sortSelect.addEventListener("change", render);

list.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (!saveButton) return;
  const id = Number(saveButton.dataset.save);
  if (savedJobs.has(id)) savedJobs.delete(id);
  else savedJobs.add(id);
  render();
});

allTab.addEventListener("click", () => { showSaved = false; render(); });
savedTab.addEventListener("click", () => { showSaved = true; render(); });

function clearSearchAndFilters() {
  keywordSearch.value = "";
  locationSearch.value = "";
  document.querySelectorAll(".filters input").forEach((input) => { input.checked = false; });
  showSaved = false;
  render();
}

document.querySelector("#clear-filters").addEventListener("click", clearSearchAndFilters);
document.querySelector("#empty-clear").addEventListener("click", clearSearchAndFilters);

render();