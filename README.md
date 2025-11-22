# BArch-Portfolio

A portfolio created for **Sadeen Maher** to showcase her work, and for anyone who wants a ready-to-use portfolio
The deployment link https://denaalharbi.github.io/BArch-Portfolio

---
## 📂 Project Structure

```text
project-root/
│
├── index.html
│
├── projects_pages/
│   ├── project1.html
│   ├── project2.html
│   └── ...
│
├── attachments/
│   ├── main_images/ do not edit
│   └── project_docs/
│       ├── project1/
│       ├── project2/
│       └── ...
│
└── CSS/ do not edit
│
└──JAVASCRIPT/ do not edit

    
```

- `attachments/project_docs/`
- `projects_pages/`
- `index.html`



---

## 🛠️ How to Add a New Project

### 1. Add project assets
- Inside `attachments/project_docs/`, create a new folder named `project#` (replace `#` with the project number, e.g. `project3`).
- Add the following files:
    - `header-home.png` → image shown on the homepage.
    - `header.png` → image shown inside the project page.
    - `boxes/` → folders for scrollable slides (e.g. `ArchDesign`, `SysDesign`), each containing the required images.

> 💡 Follow the structure of **project1** as a template.

---

### 2. Create the project page
- In `projects_pages/`, add a new file `project#.html`.
- Copy the template from an existing project page and edit details:
  ```html
  <header class="header-banner">
      <img src="../attachments/project_docs/project#/header.png" alt="Project Header">
  </header>

  <section>
      <h1>Project Overview</h1>
      <h2><strong>Location:</strong> Emirates, Abu Dhabi</h2>
      <h2><strong>Area:</strong> 450 m²</h2>
      <h2><strong>Project Definition:</strong><br>
          <!-- Add your project description here -->
      </h2>

      <!-- Example overview images -->
      <div class="overview-grid">
          <img src="../attachments/project_docs/project#/projectOverview/33.jpg" alt="Overview 1">
          <!-- Add more images as needed -->
      </div>

      <!-- Scrollable sections -->
      <h1 class="section-title red">Architectural Design</h1>
      <div class="scroll-box">
          <img src="../attachments/project_docs/project#/boxes/ArchDesign/1.png" alt="Slide 1">
          <!-- Add more slides -->
      </div>
  </section>

  ```
### 3. Link the project in index.html
Find the section where projects are listed.

Copy the template block and update the project number, link, and image path:
```html 
<div class="project-block">
    <span class="project-number">03</span>
    <div class="project-image-wrapper">
        <a href="projects_pages/project3.html">
            <img src="attachments/project_docs/project3/header-home.png" alt="Project 3" class="project-image"/>
        </a>
    </div>
    <p class="project-caption">Project Title</p>
</div>
```
### ✅ Notes
Keep file paths consistent — most issues come from incorrect relative paths.

Use the same folder structure as project1 for reliability.

Do not remove the Back to Projects button at the bottom of each project page.

## 👩‍💻 For Developers

If you’d like to adapt this portfolio for yourself, here are the main steps:

### 1. Update the Title
In `index.html`, change the `<title>` tag to your own name:
```html
<title>YourName-Portfolio</title>
```
### 2. Customize the Intro Section
Edit the description inside #intro-section to reflect your background:

```html
<section id="intro-section" class="intro-container">
  <img class="intro-pic2" src="attachments/main_images/mainPic.png" alt="Intro Image"/>
  <div class="intro-description">
    <p>
      <!-- Replace this text with your own professional description -->
    </p>
  </div>
</section>
```
- Replace mainPic.png with your own image in attachments/main_images/.

- Update the <p> text with your personal description.

### 3. Replace Homepage Images
- In index.html, update any project thumbnails or placeholder images to match your work.
- Make sure the paths point to your new files inside attachments/project_docs/project#/.

### 4. Update Contact Information
In #contact-section, replace the email and social links with your own:

```html 
<section id="contact-section" class="contact-container">
  <h2 class="get-in-touch">Get in Touch</h2>
  <p class="contact-intro">
    I'd love to hear from you.<br>
    Ideas, questions, or just hello — reach out!
  </p>
  <div class="contact-columns">
    <div class="contact-details">
      <h3>Reach Me At</h3>
      <a href="mailto:your.email@example.com">@YourName</a>
    </div>
    <div class="social-section">
      <h3>Social</h3>
      <ul class="social-links">
        <li><a href="https://www.linkedin.com/in/yourprofile/">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/yourhandle/">Instagram</a></li>
      </ul>
    </div>
  </div>

```
### ⚠️ Important: Please keep the website credit at the bottom:
```html
<div class="website-credit">
  <span id="credit-links">Website made by <a href="mailto:denauni2022@gmail.com">@DenaAlharbi</a> |</span>
  <!-- credit icons remain unchanged -->
</div>

```

### 5. Adjust Colors (Optional)
You can change the theme colors in CSS/projectStyle.css under the :root variables:
```css
:root {
  --primary-color: rgba(250, 249, 246, 0.11);
  --secondary-color: #000000;
  --accent-color: #DC143C; /* main highlight color */
  --text-color: #000000;
  --navbar-bg: rgba(0, 0, 0, 0);
  --navbar-hover-border: rgb(220, 20, 60);
  --navbar-hover: rgba(255, 255, 255, 0.47);
  --navbar-border-color: rgb(0, 0, 0);
}

```
#### ✨ With these edits, you’ll have your own personalized portfolio built on this structure, while keeping credits intact.