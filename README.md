<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/IKalonji/NFTickets">
    <img src="images/mbongo_logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">NFTickets</h3>

  <p align="center">
    NFT ticketing app built with CELO and Tatum express NFT API!
    <br />
    <a href="https://github.com/IKalonji/NFTickets"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/IKalonji/NFTickets">View Demo</a>
    ·
    <a href="https://github.com/IKalonji/NFTickets/issues">Report Bug</a>
    ·
    <a href="https://github.com/IKalonji/NFTickets/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![NFTickets][product-screenshot]](https://example.com)

NFTickets brings a new utility to NFT projects by providing a ticketing app where access is granted to users through the validity of the NFT providing gated access to holders. Users are able to buy the NFT and store it directly in their NFTickets wallet and present it at point of entry. 

Here's why:
* Providing utility to NFT's
* Simplifying the purchase and verifcation of NFT access tickets.
* Ease of use.

The project has not been audited and should not be used in production, project is currenlty a proof of concept.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Tech stack used in the project:

* [Angular](https://angular.io/)
* [Ionic](https://ionicframework.com/)
* [CELO](https://celo.org/)
* [Tatum](https://tatum.io/)
* [Transak](https://transak.gitbook.io/transak-docs/quick-guides/setting-up-a-quick-demo-integration/quick-customization-of-your-demo-integration)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Following will be required to run the project.
* Angular
  ```sh
  npm i @angular/cli
  ```
* npm
  ```sh
  npm install -g ionic
  ```
* Obtain an API key from Tatum.io NOTE: The application makes use of express NFT API, a paid plan or promo plan is required.
* Obtain an API key from Transak.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/IKalonji/NFTickets.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your Tatum and Transak API in `environments.ts`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Run the project
  ```sh
  ionic serve
  ```


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Demo

See the project demo video below.

[![DEMO](https://img.youtube.com/vi/qOL5kNVrwCI/0.jpg)](https://youtu.be/qOL5kNVrwCI)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Build ticket listing site
- [ ] Add additionnal functionality
- [ ] Add security to the app
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/IKalonji/NFTickets/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Issa Kalonji - [@ISSDawg](https://twitter.com/ISSDawg) - ikalonji@student.wethinkcode.co.za

Project Link: [https://github.com/IKalonji/NFTickets](https://github.com/IKalonji/NFTickets)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [CELO](https://celo.org/)
* [Tatum](https://tatum.io/)
* [Transak](https://transak.gitbook.io/transak-docs/quick-guides/setting-up-a-quick-demo-integration/quick-customization-of-your-demo-integration)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IKalonji/NFTickets.svg?style=for-the-badge
[contributors-url]: https://github.com/IKalonji/NFTickets/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IKalonji/NFTickets.svg?style=for-the-badge
[forks-url]: https://github.com/IKalonji/NFTickets/network/members
[stars-shield]: https://img.shields.io/github/stars/IKalonji/NFTickets.svg?style=for-the-badge
[stars-url]: https://github.com/IKalonji/NFTickets/stargazers
[issues-shield]: https://img.shields.io/github/issues/IKalonji/NFTickets.svg?style=for-the-badge
[issues-url]: https://github.com/IKalonji/NFTickets/issues
[license-shield]: https://img.shields.io/github/license/IKalonji/NFTickets.svg?style=for-the-badge
[license-url]: https://github.com/IKalonji/NFTickets/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/issa-kalonji-b301851ba/
[product-screenshot]: https://img.youtube.com/vi/qOL5kNVrwCI/0.jpg