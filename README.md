# Pokemon test v2

## Notes from Can
 
  ### What I Accomplished
  * Used **flex** in styling.
  * Avoided from **unknown urls** while redirecting.
  * Avoided from installing libraries.
  * Used **mixins.scss** for responsiveness.
  * Used **relative paths** while importing.
  * Used **predefined styles**.
  * Used existing **color palette**, **font sizes**, **media queries**, **padding sizes**.
  * Fixed style faults with `npm run standard`.
  * Created `utils.js` inside shared folder for **global functions**.
  * Created `Fetch Component` for `async` fetching with `Axios`.
  * Refactored code for better standards.
  * Added PropTypes.
 
  ### What I Experimented
  * **Dockerizing** the app. Successfully dockerized and ran in Nginx Container.
  * Deployed the app to AWS for live demo.
  * Testing with `JEST`: wrote a test component for testing fetching data from API. But; because of `babel` configuration it didin't run.

  ### State Management
  * Tried to implement Redux but got problems about its necessary or not.
  * Fixed some prop-drillings from old code and used setState instead.
  
<hr/>




Hello. This is the Immfly frontend code test. You have to build a web application listing the **first pokemon generation**.
<hr>
While cloning this repository, you will get the base project. If you have enough frontend skills, you will be able to run it locally. First time, you should see this webpage:

<img align="center" src="https://imgur.com/fhZVAkg.png" style="border: 1px solid black" />

## Features to implement


### Build and style the main list
You have to implement the main list like in this image:
<img align="center" src="https://imgur.com/HNu1wmq.png" style="border: 1px solid black" />

Notice that:
*  There are only the 151 pokemon of the first generation
*  The url is **/pokemon**.
*  When user hovers a pokemon, its background becomes gray.


### Pokemon detail page
Add the possibility to click on a pokemon and go to the detail page, like in this image:
<img align="center" src="https://imgur.com/1Mbh6mK.png" style="border: 1px solid black" />

Notice that the pokemon detail url is different. It is ``/pokemon/:name``. In the **charizard** example is ``/pokemon/charizard``.


### Images

The images url is ``http://pokestadium.com/sprites/xy/{name}.gif``

For example:
* **Charizard** <img align="center" src="http://pokestadium.com/sprites/xy/charizard.gif"/>
* **Bulbasaur** <img align="center" src="http://pokestadium.com/sprites/xy/bulbasaur.gif" />

You will realize that there are two pokemon which image is not loaded properly. Put in practice your skills to solve it.



### Api Endpoints
The api base url is ``https://pokeapi.co/api/v2``. You already have an **.env** file which is loaded by webpack and sets it by default. You only have to use two endpoints:
* **List**: ``/pokemon`` (maybe you have to add the limit parameter on the request to fetch the first generation in only one request).
* **Detail**: ``/pokemon/:name``.

For example:
* **Charizard**: ``https://pokeapi.co/api/v2/pokemon/charizard`` 
* **Bulbasaur**: ``https://pokeapi.co/api/v2/pokemon/bulbasaur`` 

## Demo
You can watch/download the video showing how the app finally should work: <a href="https://mega.nz/#!2JNVlIzb!kmmubCQEUQV0RgZ9dExTC64P_9eDNBPE8zgNNS-b0do" target="_blank">demo</a>.

## We want to see
- React knowledge
- Css skills
- ECMAScript6 skills
- Clean code
- How you code

## You should
- Use **flex** in the css style.
- **Prevent unknown urls** while redirecting to the list page.
- Style with **responsiveness**. As the video shows, the pokemon list should adapt to the screen size and show three pokemons per row on large width screen size, two pokemon per row on medium width screen size and one pokemon per row on mobile width sizes. (You have a file named mixins.scss, in which you can use the existing medias in order to configure the responsiveness).
- Use relative paths (*jsconfig.json*) while importing.
- Use predefined styles (*font-sizes*, *mixins*, *palette* and *variables*) and mixins (*mixins*),,


## Bonus
- **Use redux** .
- Add **tests**.
- Show the existing **Loading component** (*src/shared/components/Loader*) when an api request is in process.
- Use the existing **color palette** (``palette.scss``), **font-sizes** (``font-sizes.scss``), **media queries** (``mixins.scss``) and **padding sizes** (``variables.scss``).
- Follow existing **linter**. This project follows the *StandardJS* code style. There is a script task on the ``package.json`` named standard (``npm run standard``) that fixes automatically your code style faults.
- **Dockerize**
- Dockerize **hotreload** mode

## You should not
- Install another package.
- Use bootstrap.
- Do dirty things, like send via props a lot of data.


Once you finish the test, throw a Pull Request to the master branch on this repository.
