import { Component } from 'react';
import HomeTemplate from '../../templates/HomeTemplate';
import Navbar from './Navbar';
import Hero from '../../components/Hero';
import Header from './Header';
import Head from '../../components/__head';

class Main extends Component {
  render() {
    const { sections, banner } = this.props.data;
    return (
      <HomeTemplate
        className="index"
        banner={
          <Hero
            className="is-primary is-fullheight home__banner"
            head={<Navbar sections={sections} />}
            body={<Header title={banner.title} subtitle={banner.content} />}
          />
        }
      >
        <Head />
        {this.props.children}
      </HomeTemplate>
    );
  }
}

export default Main;