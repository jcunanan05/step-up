import { Component } from 'react';

export const navbarItemClassName = 'navbar-item';

class Item extends Component {
  sectionId = () => {
    // split, lowercase all, join with dash
    const { text, sectionId = '' } = this.props;
    if (sectionId != '') return sectionId;

    return text
      .toLowerCase()
      .split(' ')
      .join('-');
  };

  render() {
    const { text } = this.props;
    return (
      <a className={navbarItemClassName} href={'#' + this.sectionId()}>
        {text}
      </a>
    );
  }
}

export default Item;
