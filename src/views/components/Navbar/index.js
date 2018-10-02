import { Component } from 'react';
import Item, { navbarItemClassName } from './Item';
import Menu from './Menu';
import Burger from './Burger';

const Brand = ({ children }) => <div className="navbar-brand">{children}</div>;

export { navbarItemClassName };

class Navbar extends Component {
  state = {
    isBurgerExpanded: false
  };

  onBurgerClick = () => {
    const isBurgerExpanded = !this.state.isBurgerExpanded;
    this.setState({ isBurgerExpanded });
  };

  onMenuClick = event => {
    const { onMenuClick = '' } = this.props;
    if (!event.target.classList.contains(navbarItemClassName)) return;
    if (this.state.isBurgerExpanded) this.setState({ isBurgerExpanded: false });
    // add event hooks onMenuClick
    if (onMenuClick != '') onMenuClick(event);
  };

  render() {
    const { isBurgerExpanded } = this.state;
    const { left = '', right = '', brand = <Item text="Brand" /> } = this.props;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <Brand>
            {brand}
            <Burger onClick={this.onBurgerClick} expanded={isBurgerExpanded} />
          </Brand>
          <Menu
            onClick={this.onMenuClick}
            active={isBurgerExpanded}
            left={left}
            right={right}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
