export default class PlaceholderService {
  _apiBase = "https://jsonplaceholder.typicode.com";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    const body = await res.json();
    return body;
  };

  getPosts = async () => {
    const res = await fetch(`${this._apiBase}/posts/`);

    if (!res.ok) {
      throw new Error(`Could not fetch '/posts', received ${res.status}`);
    }

    const json = await res.json();
    return json;
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
    return json;
  };

  deletePost = async id => {
    const res = await fetch(`${this._apiBase}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    if (!res.ok) {
      throw new Error(`Cannot create post, received ${res.status}`);
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
      throw new Error(`Cannot create post, received ${res.status}`);
    }

    const json = await res.json();
    return json;
  };
}
