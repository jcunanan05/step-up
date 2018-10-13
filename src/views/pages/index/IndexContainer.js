import { Component, Fragment } from 'react';
import Velocity from '../../../libraries/Velocity';
import HomeTemplate from '../../templates/HomeTemplate';
import Navbar from '../../components/Navbar';
import Item from '../../components/Navbar/Item';
import Hero from '../../components/Hero';
import Header from './Header';

class IndexContainer extends Component {
  onMenuClick = event => {
    event.preventDefault();
    const section = document.querySelector(event.target.getAttribute('href'));
    this.scrollTo(section);
  };

  scrollTo(element) {
    if (element) Velocity(element, 'scroll', { duration: 600 });
  }

  renderHero = () => {
    const { sections, banner } = this.props.data;
    return (
      <Hero
        className="is-primary is-fullheight home__banner"
        head={
          <Navbar
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
        }
        body={<Header title={banner[0].title} subtitle={banner[0].content} />}
      />
    );
  };

  render() {
    return (
      <HomeTemplate className="index" banner={this.renderHero()}>
        {this.props.children}
      </HomeTemplate>
    );
  }
}

export default IndexContainer;
