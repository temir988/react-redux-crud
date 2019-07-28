export default class PlaceholderService {
  _apiBase = "https://jsonplaceholder.typicode.com";

  getPosts = async () => {
    const res = await fetch(`${this._apiBase}/posts/`);

    if (!res.ok) {
      throw new Error(`Could not fetch '/posts', received ${res.status}`);
    }

    const json = await res.json();
    return json.map(this._transfromPosts);
  };

  createPost = async (title, body) => {
    const res = await fetch(`${this._apiBase}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    if (!res.ok) {
      throw new Error(`Cannot create post, received ${res.status}`);
    }

    const json = await res.json();
    return json._transfromPosts;
  };

  deletePost = async id => {
    const res = await fetch(`${this._apiBase}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    if (!res.ok) {
      throw new Error(`Cannot delete post, received ${res.status}`);
    }

    const json = await res.json();
    return json;
  };

  updatePost = async (id, title, body) => {
    const res = await fetch(`${this._apiBase}/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    if (!res.ok) {
      throw new Error(`Cannot update post, received ${res.status}`);
    }

    const json = await res.json();
    return json;
  };

  _transfromPosts = post => {
    return {
      editing: false,
      ...post
    };
  };
}
