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

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>
### Built With <a name="built-with"></a>

#### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
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
</details>


#### Key Features <a name="key-features"></a>

&#9989; Image Display: The gallery displays a grid of images using the CSS Grid layout.

&#9989; Drag and Drop: You can drag and drop images to rearrange their positions in the grid. This is achieved using HTML5 drag-and-drop functionality.

&#9989; Bouncing Animation: The last card in the grid has a bouncing animation effect when clicked.

&#9989; Checkbox Selection: You can click on an image to select it. A green checkmark is displayed over the selected image.

&#9989; Checkbox UnSelection: You can click on the checked mark to unselect it. A green checkmark will be removed from the selected image.

&#9989; Selection Counter: The number of selected images is displayed at the top.

&#9989; Delete Selected Images: You can delete selected images by clicking the trash bin icon. The selected images are removed from the gallery.

&#9989; Select All Images: There is an option to select all images (except the last one) by clicking an empty box in the top left corner.

&#9989; Unselect All Images: There is also an option to unselect all images (except the last one) by clicking a checkbox in the top left corner.

&#9989; Refresh: When the last card is clicked (and it is the only one left), the page is refreshed.

&#9989; Hover Effect: Images have a hover effect that displays a semi-transparent white background on hover.

&#9989; Card Layout: Images have a card-like layout, with a shadow effect and border-radius.

&#9989; Dynamic Grid: The grid layout adjusts to accommodate different screen sizes. It shows two columns on smaller screens.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO  -->

## 🚀 Live Web Demo <a name="live-demo"></a>

- Enjoy the live version of the app 👉🏽 [here](https://image-gallery-inky-psi.vercel.app/)

## 🚀 Live Video Demo <a name="live-demo"></a>
- [here]([https://image-gallery-inky-psi.vercel.app/](https://www.loom.com/share/dbb220e77bbe4d509cb2dadf6f9c5cb0?sid=46894ceb-5542-4e4e-9486-7c39a173d508)) 

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
npm start
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
