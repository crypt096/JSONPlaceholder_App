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

<h2>Installation guide:</h2>

<p>In order to use the library and/or samples you must first download and install <a href="https://nodejs.org/en/">NodeJS</a>.</p>

<p>To install dependencies via npm, from the root level of the library directory type:</p>

<pre><code>npm install</code></pre>


<p>In order to run application type:</p>

<pre><code>npm run build</code></pre>

___________________________________________________________________________


<h2>Problems & solutions</h2>


<ul>
<li>Listing all elements from Api is made by fetching all data from <a href="http://jsonplaceholder.typicode.com/">JSONPlaceholder</a></li>

<li>Keyword search made by (using fuzzy search algorythm). As soon you start to type in the input box you will have filtered results that match searching criteria. </li>

<li>There is a form which is used to create a new post and it is made with validation, what means that you can't leave the fields empty, you'll get an error.</li>

<li>Remove any post anytime. When you search your post or just listing all the posts there is a button that delete post for you, and list is updating accordingly.</li>

<li>You can show loading spinner which is indicator if something is loading or any service call is happening.</li>

<li>Infinite scroll that adds content partially (once you scroll to the bottom of the list new content will be added), saving users from a full page load. </li></ul>

___________________________________________________________________________

<h2>Technical and architectural choices</h2>

-> In my application I was using basic Front-End web technologies.

-> I am also aware that this can be done in much easier way using some of JS frameworks (Angular for example).

___________________________________________________________________________


<h2>Possible updates</h2>
<ul>
<li>index.js can be modularized (to split the logic between DOM maniuplation, RenderList, Toggle, etc...)</li>

<li>Error handling can be also made (modals and inline-text, also if fetch isn't working, it would be nice to have some warning message, etc..)</li>

<li>Style can be also upgraded with Sass or LESS</li>

<li>Also manual or automatic tests can be made on this(Unit or Browser tests)</li>

<li>Code/comments documentation</li>
</ul>
___________________________________________________________________________


<b>All of my projects can be found here on my <a href="https://github.com/crypt096?tab=repositories">GitHub profile</a></b>

<a href="https://www.linkedin.com/in/acvjetan/">LinkedIn</a>





