import { Component, Fragment } from 'react';
import HomeTemplate from '../src/templates/HomeTemplate';
import Columns, { Column } from '../src/components/Columns';
import Section from '../src/components/Section';
import Navbar from '../src/components/Navbar';
import Item from '../src/components/Navbar/Item';
import Hero from '../src/components/Hero';

import '../src/styles/pages/_index.scss';

export default class Index extends Component {
  onMenuClick(event) {
    event.preventDefault();
    const section = document.querySelector(event.target.getAttribute('href'));
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <HomeTemplate banner={this.renderHero()}>
        <Section name="who-we-are" className="content">
          <Columns>
            <Column className="is-one-third">
              <h2 className="title is-2">Who We Are</h2>
            </Column>
            <Column>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                placeat vel repellendus voluptates temporibus assumenda dolore
                unde! Tempore, inventore perspiciatis quia fugit cumque, sed
                pariatur sunt repellendus voluptatibus placeat commodi?
              </p>
            </Column>
          </Columns>
        </Section>

        <Section name="upcoming-projects" className="content">
          <h2 className="title is-2">Upcoming Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            placeat vel repellendus voluptates temporibus assumenda dolore unde!
            Tempore, inventore perspiciatis quia fugit cumque, sed pariatur sunt
            repellendus voluptatibus placeat commodi?
          </p>
        </Section>

        <Section name="news" className="content">
          <h2 className="title is-2">News</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            placeat vel repellendus voluptates temporibus assumenda dolore unde!
            Tempore, inventore perspiciatis quia fugit cumque, sed pariatur sunt
            repellendus voluptatibus placeat commodi?
          </p>
        </Section>
      </HomeTemplate>
    );
  }
}
