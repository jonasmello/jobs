import axios from 'axios';

export default class Dragons {
  url = process.env.REACT_APP_DRAGON_API;
  async get(id = null) {
    if (id) {
      const response = await axios.get(`${this.url}/${id}`);
      return response.data;
    } else {
      return [];
    }
  }
  async getAll() {
    const response = await axios.get(this.url, {
      params: {
        sortBy: 'name',
        order: 'asc',
      },
    });
    return response.data;
  }
  async post(data = {}) {
    const response = await axios.post(this.url, data);
    return response;
  }
  async put(data) {
    const url = `${this.url}/${data.id}`;
    const response = await axios.put(url, data);
    return response;
  }
  async delete(id) {
    const url = `${this.url}/${id}`;
    const response = await axios.delete(url);
    return response;
  }
}
