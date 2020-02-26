<h1 style='text-align:center;'> MOVIE DB API </h1>

<strong> In this project, I used the most updated React Js futures with Styled Components; I used CSS Transition to animate when to mount or unmount something from DOM. I took data from THE MOVIE DATABASE API and showed users different data in different situations with beautiful animations.  The project has a responsive design for all devices. </strong>

<h3>Netlify Link: https://agitated-hugle-838e6c.netlify.com/#/</h3>
&nbsp;

![cardsGif](https://user-images.githubusercontent.com/57728302/75316198-a8185f00-5832-11ea-8075-1ca93964b90d.gif)



<hr>




<strong> Let's start with the first animation. I really like to play with animations. I did not use any CSS library. I know how they can make slow big applications. My first animation appears once per minute. I didn't want to show the user when they visit the home page every time. One minute still not too much, but of course, I can determine the time. Now see the picture below.  </strong>

&nbsp;

![timeStamp](https://user-images.githubusercontent.com/57728302/75311016-6fbd5480-5823-11ea-896e-2c7f7e4cf4c0.JPG)

&nbsp;

<strong> When component load first, I handle current timeStamp and compare it the other timeStamp. If I don't have any timeStamp (at the first visit) or my current timeStamp 6000ms (1m) bigger than the stored timeStamp I set isFirstVisit equal to true and trigger the first animation with the help of React Transition Group and Styled Components. React Transition Group important because I can animate and change the display property to none instead of hiding it after the animation finish. Small touches for better user experience. And the result. </strong>

&nbsp;

![firstAnimation](https://user-images.githubusercontent.com/57728302/75310802-da21c500-5822-11ea-859c-86246748a13e.gif)



<strong> Change the display property to none instead of hiding it after the animation finish. </strong>

&nbsp;

![Csstransition remove from dom](https://user-images.githubusercontent.com/57728302/75311429-b6f81500-5824-11ea-935d-1fb4d27934ed.JPG)

&nbsp;

<hr>

<h2>CSS</h2>

<strong> For design I used 'font-size: 62.5%' technic. Because it is effortless to use and make your design responsive. Now see the picture below. </strong>

&nbsp;


![GlobalStyle](https://user-images.githubusercontent.com/57728302/75311710-adbb7800-5825-11ea-9d40-920450b366b6.JPG)


&nbsp;

<strong> After I made 0 all margins and paddings for whole dom elements, including before and after elements, I sat font size to %62.5 with the help of Styled Components createGlobalStyle. It means every one rem equal 10px now. Of course, I could use 10px instead of 1rem. Why I didn't use px instead of rem because if you build your whole parameter with rem when you start to make your device responsive for small screen devices, all you have to do decrease font size and your whole 1rems 8.8px now instead of 10. I reached this result with just decreasing HTML font size. Font sizes, margins, paddings, height and widths have rem value. With a small decrease of HTML font-size value,  my website almost full responsive for I tablet except a couple of little things. See the gif below... </strong>

&nbsp;

![responsive](https://user-images.githubusercontent.com/57728302/75314921-27a42f00-582f-11ea-8d04-68104e705643.gif)



<hr>

&nbsp;

<strong>In this project, I went with Flexbox instead of the Grid system. Grid system was also OK, but according to https://caniuse.com, 97% of browsers can run Flexbox without a problem while this is 93% for Grid CSS. I have used a lot of excellent CSS properties such as clip-path, background-visibility (it is essential for my cards that can turn and has three layers), perspective, background-clip, -webkit-scrollbar, mask-image, and mask-size. The most important one is the advanced use of the background-image property. See the pictures below...  </strong>
</br>

&nbsp;

![StarModal](https://user-images.githubusercontent.com/57728302/75314021-8ddb8280-582c-11ea-94e1-05a58656c404.JPG)

&nbsp;


![html Stars](https://user-images.githubusercontent.com/57728302/75314274-41447700-582d-11ea-9778-eb305b796d7d.JPG)


&nbsp;

<strong>Rating becomes the width of background-color of stars. When I set color: transparent and background-clip: text for HTML stars, background image paints stars. And a little bit low opacity black stays around stars that have an angle for seeing stars better.  </strong>

&nbsp;

![Stars background-image](https://user-images.githubusercontent.com/57728302/75314596-350ce980-582e-11ea-8bd2-91712346dd6e.JPG)
![frontcard top of it black](https://user-images.githubusercontent.com/57728302/75315313-72727680-5830-11ea-84cf-c5db2fdfff86.JPG)
&nbsp;


<strong> And the result. Now everyone is happy. (for a vote_avarage that between 8 and 9) </strong>

&nbsp;

![stars](https://user-images.githubusercontent.com/57728302/75314755-ad73aa80-582e-11ea-81c7-3ac35cc2aed6.JPG)

&nbsp;

<strong> Here is another usage of the background image. I make text colorful with the linear-gradient property. </strong>

&nbsp;

![colorfulText](https://user-images.githubusercontent.com/57728302/75315420-ba919900-5830-11ea-8d3a-c377afcc7101.JPG)

&nbsp;

<strong>  I really like SVG's as a background image. Here is another example of mask-size and mask image properties. This approach same as the painting background of the element. I have @supporst future here. If a browser doesn't support mask-size or mask-image features as a solution, they can show the SVG as a background-image otherwise mask-image and mask-size works. </strong>

&nbsp;

![maskimagesupport](https://user-images.githubusercontent.com/57728302/75315464-d1d08680-5830-11ea-9bd6-fec803698990.JPG)

&nbsp;

<strong> In this project, I also used Material UI for Pagination. You can see how I override Material UI styles with Styled Components. It is really powerful. </strong>

&nbsp;

![materialUIhack](https://user-images.githubusercontent.com/57728302/75315792-b154fc00-5831-11ea-8f75-38baf0081959.JPG)

&nbsp;

<strong> And here, you can see how I used Styled Components and React Transition Group for animation Modal while it is opening and closing. A lot of animation work here. </strong>

&nbsp;

![4 different class for animation modal](https://user-images.githubusercontent.com/57728302/75315980-27596300-5832-11ea-8a06-746fd13d9efc.JPG)

<hr>

<h2>JAVASCRIPT</h2>

&nbsp;

<strong>  For improving my component structure skills, I didn't use Redux or Context API in this project. Passing props wasn't easy, but I needed to double think about component structure every time. I had three main containers, one main presentational component and a couple of the other components. As you can see in the picture, my container components stores movies that coming from API. They set loading, handle errors, scroll top after page change, handle page count for each request and pass data to pagination to create pagination structure according to the number total page count. They also handle current page data and make Api request according to it. After all this work, they pass data to main presentational component Movies. </strong>

&nbsp;

![Remote states](https://user-images.githubusercontent.com/57728302/75320566-fa5e7d80-583c-11ea-8cbd-9be2fe7c0e72.JPG)

&nbsp;

<strong> Here a part of my main presentational component. It handles an array of movie data, displays it with map function and returns each card. Some movies didn't have posters and backdrop paths. I eliminated them before display. Also, I needed to prevent rendering this component if there is no API requests anywhere in the application. </strong>

&nbsp;

![eliminatePosterless](https://user-images.githubusercontent.com/57728302/75320664-2e39a300-583d-11ea-9901-93ea8b7e70e9.JPG)

&nbsp;

<strong> I triggered error with a button that stays right bottom of the page. </strong>

&nbsp;

![triger error](https://user-images.githubusercontent.com/57728302/75321118-1adb0780-583e-11ea-9cca-50ffa212223e.JPG)

&nbsp;

<strong> My first approach was sending HTTP Request for each keystroke, but then I changed my mind because of performance purposes. For making HTTP Request with onSubmit, I needed to use uncontrolled components. Here you can see how I did it. </strong>

&nbsp;

![uncontroledcomponents](https://user-images.githubusercontent.com/57728302/75321788-85407780-583f-11ea-9cd4-d4a8b5236b89.JPG)

&nbsp;

<strong> For remoting on components, I used React Router, and the 'history.push()' method was beneficial when I used it for my logo to go home page. </strong>

&nbsp;

![historyPush](https://user-images.githubusercontent.com/57728302/75321447-cedc9280-583e-11ea-878f-3993d5e358ea.JPG)

&nbsp;

<hr>

<h3>Netlify Link: https://agitated-hugle-838e6c.netlify.com/#/</h3>
<h4><strong>Used technologies: </strong> React JS (React Hooks, Styled Components, React Transition Group, React Router, Material UI), HTML, CSS.  </h4>




