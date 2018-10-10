import { Component, Fragment } from 'react';
import Velocity from '../../../libraries/Velocity';
import HomeTemplate from '../../templates/HomeTemplate';
import Navbar from '../../components/Navbar';
import Item from '../../components/Navbar/Item';
import Hero from '../../components/Hero';
import { landingPage, sections } from './data';

class IndexContainer extends Component {
  onMenuClick = event => {
    event.preventDefault();
    const section = document.querySelector(event.target.getAttribute('href'));
    this.scrollTo(section);
  };

  scrollTo(element) {
    if (element) Velocity(element, 'scroll', { duration: 600 });
  }

  renderHero = () => (
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
      body={
        <header className="container has-text-centered">
          <h1 className="title is-1">{landingPage.title}</h1>
          <p className="subtitle">{landingPage.subtitle}</p>
        </header>
      }
    />
  );

  render() {
    return (
      <HomeTemplate className="index" banner={this.renderHero()}>
        {this.props.children}
      </HomeTemplate>
    );
  }
}

export default IndexContainer;
