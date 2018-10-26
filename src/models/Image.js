class Image {
  constructor(entry = {}) {
    this.entry = entry;
  }

  setImage(entry) {
    this.entry = { ...entry };
    return this;
  }

  get fields() {
    return this.entry.fields;
  }

  get url() {
    return `http:${this.entry.fields.file.url}`;
  }
}

export default Image;
