import Model from './';

class Posts extends Model {
  constructor(entries = []) {
    super(entries);
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

  get allPosts() {
    const { entries, getFields } = this;
    return entries.map(entry => getFields(entry));
  }
}

export default Posts;
