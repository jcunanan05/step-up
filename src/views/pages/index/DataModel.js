import { sortBy } from 'lodash';

class ModelData {
  constructor(entries = []) {
    this.entries = entries.items;
    this.type = {
      banner: 'banner',
      whoWeAre: 'whoweare',
      projects: 'projects',
      news: 'news'
    };
  }

  typeOf(type) {
    return entry => entry.fields.type === type;
  }

  set setEntries(entries) {
    this.entries = [...entries, ...this.entries];
  }

  getFields(entry) {
    return {
      title: entry.fields.title,
      content: entry.fields.content,
      type: entry.fields.type,
      sectionOrder: entry.fields.sectionOrder
    };
  }

  get sections() {
    const { entries, getFields, type } = this;
    const sections = entries
      .map(entry => getFields(entry))
      .filter(section => section.type !== type.banner);
    return sortBy(sections, 'sectionOrder');
  }

  get banner() {
    const { entries, typeOf, type, getFields } = this;
    return entries.filter(typeOf(type.banner)).map(entry => getFields(entry));
  }

  get whoWeAre() {
    const { entries, typeOf, type, getFields } = this;
    return entries.filter(typeOf(type.whoWeAre)).map(entry => getFields(entry));
  }

  get projects() {
    const { entries, typeOf, type, getFields } = this;
    return entries.filter(typeOf(type.projects)).map(entry => getFields(entry));
  }

  get news() {
    const { entries, typeOf, type, getFields } = this;
    return entries.filter(typeOf(type.news)).map(entry => getFields(entry));
  }
}

export default ModelData;
