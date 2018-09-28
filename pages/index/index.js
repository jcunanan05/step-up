import { Component, Fragment } from 'react';
import Velocity from '../../src/Velocity';
import HomeTemplate from '../../src/templates/HomeTemplate';
import Navbar from '../../src/components/Navbar';
import Item from '../../src/components/Navbar/Item';
import Hero from '../../src/components/Hero';
import WhoWeAre from './WhoWeAre';
import UpcomingProjects from './UpcomingProjects';
import News from './News';

export default class Index extends Component {
  onMenuClick(event) {
    event.preventDefault();
    const section = document.querySelector(event.target.getAttribute('href'));
    if (section) Velocity(section, 'scroll', { duration: 600 });
  }

  renderHero = () => (
    <Hero
      className="is-dark is-fullheight home__banner"
      head={this.renderNavbar()}
      body={
        <header className="container has-text-centered">
          <h1 className="title is-1">StepUP!</h1>
          <h2 className="subtitle">Community Initiative</h2>
        </header>
      }
    />
  );

  renderNavbar = () => (
    <Navbar
      brand={<Item text="StepUP" />}
      right={
        <Fragment>
          <Item text="Who We Are" />
          <Item text="Upcoming Projects" />
          <Item text="News" />
        </Fragment>
      }
      onMenuClick={this.onMenuClick}
    />
  );

  render() {
    return (
      <HomeTemplate className="index" banner={this.renderHero()}>
        <WhoWeAre />
        <UpcomingProjects />
        <News />
      </HomeTemplate>
    );
  }
}
