import { Component, Fragment } from 'react';
import Velocity from '../../../libraries/Velocity';
import NavbarComponent from '../../components/Navbar';
import Item from '../../components/Navbar/Item';

class Navbar extends Component {
  onMenuClick = event => {
    event.preventDefault();
    const section = document.querySelector(event.target.getAttribute('href'));
    this.scrollTo(section);
  };

  scrollTo(element) {
    if (element) Velocity(element, 'scroll', { duration: 600 });
  }

  render() {
    const { sections } = this.props;
    return (
      <NavbarComponent
        brand={<Item text="StepUP" />}
        right={
          <Fragment>
            {sections.map(({ title }) => (
              <Item text={title} key={title} />
            ))}
          </Fragment>
        }
        onMenuClick={this.onMenuClick}
      />
    );
  }
}

export default Navbar;
