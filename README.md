<h1 style='text-align:center;'> MOVIE DB API </h1>
<strong> In this project, I used the most updated React Js futures with Styled Components, I used CSS Transition to animate when unmount something from DOM. I took data from THE MOVIE DATABASE API and showed user different data in different situations with nice animations. .</strong>

![firstAnimation](https://user-images.githubusercontent.com/57728302/75310802-da21c500-5822-11ea-859c-86246748a13e.gif)
<hr>

&nbsp;


<strong> Lets start with first animation. I realy like play with aniamtions. I did not use any css library. Because I know how heavy they for for big applications. My firs animation appears once per minute. I didn't want to show user when they visit home page every time. One minute still not to much but of course I can determine the time. Now see the picture below.  </strong>

&nbsp;

![timeStamp](https://user-images.githubusercontent.com/57728302/75311016-6fbd5480-5823-11ea-896e-2c7f7e4cf4c0.JPG)

&nbsp;


<strong> When component load first, I handle current timeStamp and compare it the other timeStamp. If I dont have any timeStamp (at the first visit) or my current timeStamp 6000ms (1m) bigger than stored timeStamp I set isFirstVisit true and triger first animation with help of CSS Transition and Styled Components. CSS Transition important because I can animate and remove it from the DOM when the animation and instead of hiding it. Small touches for better user experience...  </strong>

&nbsp;

![Csstransition remove from dom](https://user-images.githubusercontent.com/57728302/75311429-b6f81500-5824-11ea-935d-1fb4d27934ed.JPG)

&nbsp;

<hr>

<h2>CSS</h2>

<strong> For designing I used 'font-size: 62.5%' aproach. Because it is very easy to use and make your design responsive. Now see the picture below. </strong>

&nbsp;


![GlobalStyle](https://user-images.githubusercontent.com/57728302/75311710-adbb7800-5825-11ea-9d40-920450b366b6.JPG)


&nbsp;

<strong> After I made 0 all margin and padding for whole dom elements including before and after elemens, I sat font size to %62.5 with help of Styled Components createGlobalStyle. It means every one rem equal 10px now. Of course I could use 10px instead of 1rem. Why I didn't use px instead of rem because if you build your whole pramater with rem when you start to do make your device responsive for small screen devices, all you have to do decrease font size and your whole 1rems 8.8px now instead of 10 . I reached this result with just decreasing html font size. Font sizes, margins, paddings, height and widths have rem value. with small decrease of changing ram my website almost full responsive for I tablet except couple of small things. See the animation below... </strong>

<hr>

&nbsp;

<strong>In this project I went with Flexbox instead of Grid system. Grid system was also OK but according to https://caniuse.com , 97% of browsers can run flexbox without problem while this is 93% for Grid CSS. I have used a lot of excellent CSS properties suc as clip-path, background-visibility (it is esential for my cards that can turn), perpective, background-clip, -webkit-scrollbar, mask-image, mask-size and the most important one, advanced used of background image propery. See the pictures below... </strong>
</br>

&nbsp;

![StarModal](https://user-images.githubusercontent.com/57728302/75314021-8ddb8280-582c-11ea-94e1-05a58656c404.JPG)

&nbsp;

<strong> I have 5 html stars. These are html elements. When I took vote_count data from api, converted it usable digits with Math.ceil() function and then I sent it as a props with name of ratings to StyledModal to style it.</strong>

![html Stars](https://user-images.githubusercontent.com/57728302/75314274-41447700-582d-11ea-9778-eb305b796d7d.JPG)
![StarModal](https://user-images.githubusercontent.com/57728302/75314021-8ddb8280-582c-11ea-94e1-05a58656c404.JPG)

&nbsp;

<strong>Rating becomes width of background-color of stars. When I set color: transparent and background-clip: text for html stars, background image paints stars. And a little bit low opacity black with that has angle for seeing stars better  </strong>

&nbsp;

![Stars background-image](https://user-images.githubusercontent.com/57728302/75314596-350ce980-582e-11ea-8bd2-91712346dd6e.JPG)

&nbsp;


<strong> And the result!! (for a vote_avarage that between 8 and 9) </strong>

&nbsp;

![stars](https://user-images.githubusercontent.com/57728302/75314755-ad73aa80-582e-11ea-81c7-3ac35cc2aed6.JPG)

&nbsp;

<hr>




<h4><strong>Used technologies: </strong> React JS (React Hooks, Styled Components), HTML, CSS.  </h4>
<h3>Netlify Link: https://quizzical-hopper-24a893.netlify.com</h3>

