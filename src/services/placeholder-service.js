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
    const res = await this.getResource("/posts/");
    return res;
  };
}
