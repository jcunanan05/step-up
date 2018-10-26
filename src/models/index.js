class Model {
  constructor(entries = []) {
    this.entries = entries.items || [];
  }

  get getEntries() {
    return this.entries;
  }

  typeOf(type) {
    return entry => entry.fields.type === type;
  }
}

export default Model;
