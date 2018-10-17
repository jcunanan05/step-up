class Model {
  constructor(entries = []) {
    this.entries = entries.items || [];
  }

  setEntries(entries) {
    this.entries = [...entries.items, ...this.entries];
    return this;
  }

  getEntries() {
    return this.entries;
  }

  typeOf(type) {
    return entry => entry.fields.type === type;
  }
}

export default Model;
