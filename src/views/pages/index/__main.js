import { Component } from 'react';
import HomeTemplate from '../../templates/HomeTemplate';
import Navbar from './__navbar';
import Hero from '../../components/Hero';
import Header from './__header';
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
        <Head title={banner.title} />
        {this.props.children}
      </HomeTemplate>
    );
  }
}

export default Main;
