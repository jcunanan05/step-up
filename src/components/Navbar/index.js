import { Component } from 'react';
import Item from './Item';
import Menu from './Menu';
import Burger from './Burger';

const Brand = ({ children }) => <div className="navbar-brand">{children}</div>;

class Navbar extends Component {
  state = {
    isBurgerExpanded: false
  };

  onBurgerClick = () => {
    const isBurgerExpanded = !this.state.isBurgerExpanded;
    this.setState({ isBurgerExpanded });
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
          <Menu active={isBurgerExpanded} left={left} right={right} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
