import { Component } from 'react';

class Menu extends Component {
  renderNavbar = (direction, children) => {
    if (children == '') return '';
    return <div className={`navbar-${direction}`}>{children}</div>;
  };

  render() {
    const { left = '', right = '', active = false } = this.props;
    const isActive = active ? 'is-active' : '';
    return (
      <div className={`navbar-menu ${isActive}`}>
        {this.renderNavbar('start', left)}
        {this.renderNavbar('end', right)}
      </div>
    );
  }
}

export default Menu;
