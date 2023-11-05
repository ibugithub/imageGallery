<br>
<div align='center'>
	<h1>Beautiful Image Gallery</h1>
  </div>
<a name="readme-top"></a>

# 📗 Table of Contents
- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [👥 Authors](#authors)
- [📝 License](#license)


# 🖥️ "BEautiful Image Gallery"  <a name="about-project"></a>

The **Image Gallery Project** is a stunning and feature-rich beautiful web application designed to help you manage, showcase, and interact with your image collections. Who loves visual content, this gallery offers a delightful and interactive way to present your work.

#### Tech Stack <a name="tech-stack"></a>

  Client:
  <br>
  <ul>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img alt="ruby" width="90px"  height="35px" src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    </a>
    <br>
    <a href="https://babeljs.io/">
      <img alt="ruby" width="100px"  height="35px" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
    </a>
    <br>
    <a href="https://github.com/microverseinc/linters-config/tree/master/react-redux">
      <img alt="ruby" width="130px"  height="35px" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
    </a>
    <br>
    <a href="https://github.com/microverseinc/linters-config/tree/master/react-redux">
      <img alt="ruby" width="145px"  height="35px" src="https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white" />
    </a>
    <br>
    <a href="https://webpack.js.org/">
      <img alt="ruby" width="140px"  height="35px" src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" />
    </a>
    <br>
    <a href="https://reactjs.org/">
      <img alt="ruby" width="120px"  height="35px" src="https://img.shields.io/badge/React-0075A8?style=for-the-badge&logo=react&logoColor=61DAFB" />
    </a>
    <br>
    <a href="https://tailwind.com/">
      <img alt="ruby" width="100px"  height="35px" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    </a>
    <br>

  </ul>


#### Key Features <a name="key-features"></a>

&#9989; Image Display: The gallery displays a<br>
grid of images using the CSS Grid layout.<br>

&#9989; Drag and Drop: You can drag and drop<br>
images to rearrange their positions in the grid.<br>
This is achieved using HTML5 drag-and-drop functionality.<br>

&#9989; Bouncing Animation: The last card in the<br>
grid has a bouncing animation effect when clicked.<br>

&#9989; Checkbox Selection: You can click on an<br>
image to select it. A green checkmark is displayed<br>
over the selected image.<br>

&#9989; Checkbox UnSelection: You can click on the<br>
checked mark to unselect it. A green checkmark will<br>
be removed from the selected image.<br>

&#9989; Selection Counter: The number of selected<br>
images is displayed at the top.<br>

&#9989; Delete Selected Images: You can delete<br>
selected images by clicking the trash bin icon.<br>
The selected images are removed from the gallery.<br>

&#9989; Select All Images: There is an option to<br>
select all images (except the last one) by clicking<br>
an empty box in the top left corner.<br>

&#9989; Unselect All Images: There is also an option<br>
to unselect all images (except the last one) by<br>
clicking a checkbox in the top left corner.<br>

&#9989; Refresh: When the last card is clicked<br>
(and it is the only one left), the page is refreshed.<br>

&#9989; Hover Effect: Images have a hover effect that<br>
displays a semi-transparent white background on hover.<br>

&#9989; Card Layout: Images have a card-like layout,<br>
with a shadow effect and border-radius.<br>

&#9989; Dynamic Grid: The grid layout adjusts to accommodate<br>
different screen sizes. It shows two columns on smaller screens.<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO  -->

## 🚀 Live Web Demo <a name="live-demo"></a>

- Enjoy the live version of the app 👉🏽 [here](https://image-gallery-inky-psi.vercel.app/)

## 🚀 Video Demo <a name="live-demo"></a>
- Checkout the video demo  👉🏽 [here](https://www.loom.com/share/62033487ef224fdfb992d76356d412a6?sid=ab2cd614-9a37-4c34-af4a-fd2130a0bbda)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

Prerequisites and setup instructions for the project are listed below.

<!-- Prerequisites -->
### Prerequisites <a name="prerequisites"></a>

To run this project you need:
- Computer running MacOS, Linux or Windows
- Terminal (macOS/Linux) or Command Line (Windows)
- Git ([Download](https://git-scm.com/downloads))
- Web browser ([Chrome](https://www.google.com/chrome/), [Firefox](https://www.mozilla.org/en-US/firefox/new/), etc.)
- Source code editor ([VSCode](https://code.visualstudio.com/), [Atom](https://atom.io/), etc.)
- Node.js (version 14.15.4 or higher) ([Download](https://nodejs.org/en/download/))
- NPM (version 6.14.10 or higher) ([Download](https://www.npmjs.com/get-npm))
- React ([Create React App](https://create-react-app.dev/docs/getting-started/))


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Setup -->
### Setup <a name="setup"></a>

1. Clone the repository:

```bash
open git bash
git clone https://github.com/ibugithub/imageGallery
cd imageGallery
```

2. Install the dependencies:

```
npm install
```




4. Start the app in a Power Shell/bash terminal:

```bash
npm run dev
```

5. Open your web browser and navigate to: http://localhost:3000/ to access the application.


## Project Structure

- `src/components/image-gallery/`: Contains the image gallery component.
- `src/components/header/`: Contains the very simple header component.
- `src/assets/`: Stores image assets used in the gallery.
- `src/lib/`: Houses the functionality for drag-and-drop operations.




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->
## 👥 Authors <a name="authors"></a>

This project was developed by 
👤 **Ibrahim Hossain**
- GitHub: [ibugithub](https://github.com/ibugithub)
- LinkedIn: [ibuu](https://www.linkedin.com/in/ibuu/)
- Twitter: [@mdibrahimibuu](https://twitter.com/mdibrahimibuu)



<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
