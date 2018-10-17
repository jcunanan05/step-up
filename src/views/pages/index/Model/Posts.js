import Model from './';

class Posts extends Model {
  constructor(entries = []) {
    super(entries);
    this.type = {
      project: 'project',
      news: 'news'
    };
  }

  getFields(entry) {
    return {
      id: entry.sys.id,
      createdAt: entry.sys.createdAt,
      type: entry.fields.type,
      title: entry.fields.title,
      content: entry.fields.content,
      image: entry.fields.image
    };
  }

  get projects() {
    const { entries, type, getFields, typeOf } = this;
    return entries.filter(typeOf(type.project)).map(entry => getFields(entry));
  }

  get news() {
    const { entries, type, getFields, typeOf } = this;
    return entries.filter(typeOf(type.news)).map(entry => getFields(entry));
  }
}

export default Posts;
