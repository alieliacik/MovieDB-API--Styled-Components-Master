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
![data](https://user-images.githubusercontent.com/57728302/74435637-e1180300-4e32-11ea-80d0-3ad638fefbd1.JPG)

<hr>

&nbsp;
<strong> As you can see for looping through on data, I needed to convert it array of object. </strong>
</br>

&nbsp;
&nbsp;

![array-push](https://user-images.githubusercontent.com/57728302/74435811-48ce4e00-4e33-11ea-8ce6-9be61d41ef84.JPG)

<hr>

&nbsp;
&nbsp;

<strong> Immutable way of setData. I didn't touch original state while updating it. For beter user experience I closed opened menu when user clicked another one. 
  &nbsp;

</strong>
&nbsp;
&nbsp;

![update-object](https://user-images.githubusercontent.com/57728302/74436484-8b445a80-4e34-11ea-9850-83d2c36632de.JPG)

<hr>

<strong> First map function while maping each section, also I needed to handle section name after user click section. 
  &nbsp;

</strong>

&nbsp;
&nbsp;

![first-map](https://user-images.githubusercontent.com/57728302/74436305-34d71c00-4e34-11ea-9e3e-402616004a43.JPG)

<hr>

<strong> Power of Styled Components !! 
  &nbsp;

</strong>

&nbsp;
&nbsp;

![power-of-styled-components](https://user-images.githubusercontent.com/57728302/74436837-1cb3cc80-4e35-11ea-909c-e132d25cfb55.JPG)


<hr>

<strong> I needed to loop thgrough on list items. I dind't need another div, that's why I used 'React.Fragment'
  &nbsp;

</strong>

&nbsp;
&nbsp;

![second-map](https://user-images.githubusercontent.com/57728302/74436906-3e14b880-4e35-11ea-8dfe-8d61a65203ee.JPG)


<hr>

<h4><strong>Used technologies: </strong> React JS (React Hooks, Styled Components), HTML, CSS.  </h4>
<h3>Netlify Link: https://quizzical-hopper-24a893.netlify.com</h3>

