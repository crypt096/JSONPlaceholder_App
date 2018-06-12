# JSONPlaceholder_App

This is application purpose is to manipulate with JSONPlaceholder's objects (http://jsonplaceholder.typicode.com/)
Techonologies used:

<b>HTML5
CSS3
JavaScript(VanillaJS,jQuery)
Build tools (Webpack)
Node
npm</b>
___________________________________________________________________________


<h2>Tasks (problems & solutions)</h2>


->First task was to list all elements from Api,and it's fixed by fetching all data from http://jsonplaceholder.typicode.com/
Also the expanadble field for body's content has been made.

->Second task here is the keyword search that is also implemented so you can find your added post or any post in JSONPlaceholder's database.
As you type,you get filtered answers as possible wanted posts.

->Third task was to crate form which is used to create a new post and it is made with validation,what means that you can't leave the fields empty,you'll get an error.

->Fourth task was to implement the way to remove any post anytime,and it's also been made.When you search your post or just listing all the posts there is a button that delete post for you,and list is updating accordingly.

->Fifth task was to implement loading spinner which is indicator if something is loading or for any service call. That is also implemented,fixing your screen and showing you that something is happening at the moment "under the hood".

-->Also,as additional feature I had to implement infinite scroll,which is made by listing last 20 posts and after them you will see the "magic" happens.

___________________________________________________________________________

<h2>Technical and architectural choices</h2>

->In my application I was using VanillaJS and JQuery. I think that is most important thing for everybody to know the basic things so I've chosen this way to made app.

I also wanted to show how VanillaJS works and how JQuery works.

I am also aware that this can be done in a much easier way using some of JS frameworks (Angular for example).

___________________________________________________________________________


<h2>Possible updates</h2>

-> index.js can be modularized (to split the logic between DOM maniuplation,RenderList,Toggle,etc...)

-> Error handling can be also made (modals and inline-text,also if fetch isn't working,it would be nice to have some warning message,etc..)

-> Style can be also upgraded with Sass or LESS

-> Also manual or automatic tests can be made on this(Unit or Browser tests)

-> Method documentation can be better

-> Comments also could be clearer
___________________________________________________________________________








