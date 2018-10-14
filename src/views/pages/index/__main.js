import { Component } from 'react';
import HomeTemplate from '../../templates/HomeTemplate';
import Navbar from './__navbar';
import Hero from '../../components/Hero';
import Header from './__header';

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
            body={
              <Header title={banner[0].title} subtitle={banner[0].content} />
            }
          />
        }
      >
        {this.props.children}
      </HomeTemplate>
    );
  }
}

export default Main;
