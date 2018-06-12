import * as fuzzy from "fuzzysearch";

export function PostsModel(array) {

    // Reverse array to display id in descending order (to see when you add post immediately)
    const posts = array.reverse();

    // Almost as pagination (First chunk is 0-20, Second is 20-40 ...)
    const itemsPerPage = 20;

    // Next id
    let nextId = posts.length + 1;

    this.getPosts = (keywords, part) => {

        // If overflow (part that does not exist)
        if (itemsPerPage * part > posts.length) {
            return [];
        }

        // Start and end range (0-20 or 20-40 or ...)
        const startRange = itemsPerPage * part;
        const endRange = (itemsPerPage * part + 20) < posts.length ? (itemsPerPage * part + 20) : posts.length;

        // Filtering posts to get only ones that matches searching criteria
        return posts.filter((post) => {
            return !keywords || fuzzy(keywords, post.body) || fuzzy(keywords, post.title);
        })
            // Faking pagination from backend side
            .slice(startRange, endRange);
    };

    this.addPosts = (post) => {

        const id = nextId;
        const title = post.title;
        const body = post.body;

        posts.unshift({id, title, body});

        nextId++;
    };

    this.deletePost = (id) => {
        const index = posts.findIndex((el) => el.id === +id);
        if (index >= 0) {
            posts.splice(index, 1);
        }
    }
}