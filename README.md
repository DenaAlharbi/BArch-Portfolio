# BArch-Portfolio

A portfolio created for **Sadeen Maher** to showcase her work, and for me to practice using **Tailwind CSS** for the first time.

---

## 📂 Project Structure
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
    ├──main_images/ do not edit
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