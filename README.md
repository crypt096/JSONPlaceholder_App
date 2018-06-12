# JSONPlaceholder_App

This is an example of application that can list, delete and add simple data using fake REST services (http://jsonplaceholder.typicode.com/) as a backend.

<h2>Techonologies used:</h2>

<b><ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript(VanillaJS,jQuery)</li>
<li>Build tools (Webpack)</li>
<li>Node</li>
<li>npm</li></ul></b>
___________________________________________________________________________


<h2>Problems & solutions</h2>


<ul>
<li>Listing all elements from Api is made by fetching all data from <a href="http://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
Also the expanadble field for body's content has been made.</li>

<li>Keyword search made bu (using fuzzy search algorythm) so you can find your added post or any post in JSONPlaceholder's database.
As you type, you get filtered answers as possible wanted posts.</li>

<li>There is a form which is used to create a new post and it is made with validation, what means that you can't leave the fields empty, you'll get an error.</li>

<li>Remove any post anytime. When you search your post or just listing all the posts there is a button that delete post for you, and list is updating accordingly.</li>

<li>You can show loading spinner which is indicator if something is loading or any service call is happening.</li>

<li>Infinite scroll, which is made by listing last 20 posts and after them you will see the "magic" happens. </li></ul>

___________________________________________________________________________

<h2>Technical and architectural choices</h2>

-> In my application I was using VanillaJS and JQuery. I think that is most important thing for everybody to know the basic 
   things so I've chosen this way to made app.

-> I also wanted to show how VanillaJS works and how JQuery works.

-> I am also aware that this can be done in a much easier way using some of JS frameworks (Angular for example).

___________________________________________________________________________


<h2>Possible updates</h2>
<ul>
<li>index.js can be modularized (to split the logic between DOM maniuplation, RenderList, Toggle, etc...)</li>

<li>Error handling can be also made (modals and inline-text, also if fetch isn't working, it would be nice to have some warning message, etc..)</li>

<li>Style can be also upgraded with Sass or LESS</li>

<li>Also manual or automatic tests can be made on this(Unit or Browser tests)</li>

<li>Method documentation can be better</li>

<li>Comments also could be clearer</li>
</ul>
___________________________________________________________________________


<b>All of my projects can be found here on my <a href="https://github.com/crypt096?tab=repositories">GitHub profile</a></b>

<a href="https://www.linkedin.com/in/acvjetan/">LinkedIn</a>





