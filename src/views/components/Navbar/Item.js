import { Component } from 'react';
import { kebabCase } from '../../../helpers';

export const navbarItemClassName = 'navbar-item';

class Item extends Component {
  sectionId = () => {
    // split, lowercase all, join with dash
    const { text, sectionId = '' } = this.props;
    if (sectionId != '') return sectionId;

    return kebabCase(text.toLowerCase());
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
