import Model from './';
import { sortBy } from 'lodash';

class LandingPage extends Model {
  constructor(entries = []) {
    super(entries);
    this.type = {
      banner: 'banner',
      whoWeAre: 'whoweare',
      projects: 'projects',
      news: 'news'
    };
  }

  getFields(entry) {
    return {
      title: entry.fields.title,
      content: entry.fields.content,
      type: entry.fields.type,
      sectionOrder: entry.fields.sectionOrder
    };
  }

  get allSections() {
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

export default LandingPage;
