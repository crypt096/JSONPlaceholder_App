import * as $ from "jquery";

import {RestApi} from "./RestService/RestService";
import {PostsModel} from "./Posts/PostsModel";

import "bootstrap-css";
import "../assets/style.css";

(async () => {

    // Elements
    const newPostFormElement = $("#addNewPostForm");
    const postListElement = $("#post-list");
    const searchBoxElement = $("#searchBox");

    // Creating Rest Api Service
    const RESTApiService = new RestApi("https://jsonplaceholder.typicode.com");

    // Part that is currently loaded (0-20 in our case)
    let currentlyLoadedPart = 0;

    // Getting posts
    const data = await RESTApiService.getPosts();

    // Creating Posts model
    const Posts = new PostsModel(data);

    // Submiting form event
    newPostFormElement.submit(function (event) {

        // To avoid page refresh because of submit event
        event.preventDefault();

        const serialized = $(this).serializeArray();

        const title = serialized[0].value;
        const body = serialized[1].value;

        RESTApiService.addPost({title, body})
            .then((json) => {
                currentlyLoadedPart = 0;
                Posts.addPosts(json);

                renderList(Posts.getPosts(searchBoxElement.val(), currentlyLoadedPart), true);
            });

    });

    // Searching for keywords event
    searchBoxElement.keyup((ev) => {
        currentlyLoadedPart = 0;

        const keywords = ev.target.value;
        const filteredPosts = Posts.getPosts(keywords, currentlyLoadedPart);
        renderList(filteredPosts, true);
    });

    // When click on list item
    postListElement.click((ev) => {

        // Stop click propagation on this element
        ev.stopPropagation();

        const target = ev.target;

        const actionType = target.getAttribute("data-type");
        const id = target.getAttribute("data-id");

        switch (actionType) {
            case "delete": {
                if (id) {
                    RESTApiService.deletePost(id).then(() => {
                        Posts.deletePost(id);
                        currentlyLoadedPart = 0;
                        renderList(Posts.getPosts(searchBoxElement.val(), currentlyLoadedPart), true);
                    });
                }

                break;
            }

            default: {
                $(target).closest(".list-element").find(".body").slideToggle();
                $(target).closest(".list-element").find("i").toggleClass("fa-caret-left fa-caret-down");
                break;
            }
        }
    });

    // Render list
    const renderList = (posts, shouldRecreate) => {

        // Whether to start with an empty list or to append posts to an existing list
        if (shouldRecreate) {
            postListElement.empty();
        }

        posts.forEach((post) => {

            const template =
                `
                 <div class="list-element">
                   <div class="header-section">
                      <div class="title-section">
                         <span class="title-text">
                         ${post.id} - ${post.title}
                         </span>
                      </div>
                      <button data-type="delete" data-id=${post.id} class="btn btn-danger">Delete</button>	
                   </div>
                   <div class="togglable">
                      <div class="body">${post.body}</div>
                   </div>
                </div>
                `;

            postListElement.append($(template));
        });

    };

    // Initial rendering
    renderList(Posts.getPosts("a", currentlyLoadedPart));

})();