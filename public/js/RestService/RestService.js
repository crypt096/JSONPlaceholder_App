import * as $ from "jquery";

export function RestApi(baseUrl) {

    const fetchApi = (url, args) => {
        
        $("#loading-spinner").show();
        
        return window.fetch(url, args)
            .then(response => {
                
                $("#loading-spinner").hide();
                return response.json();
                
            })
            .catch((err) => {
                
                $("#loading-spinner").hide();
                return err;
                
            });
    };

    this.getPosts = () => {
        return fetchApi(`${baseUrl}/posts`);
    };

    this.addPost = (post) => {
        return fetchApi(`${baseUrl}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

    };

    this.deletePost = (id) => {
        return fetchApi(`${baseUrl}/posts/${id}`);
    }

}