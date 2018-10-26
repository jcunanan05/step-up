import { Component } from 'react';
import LandingPageModel from '../../../models/LandingPage';
import PostsModel from '../../../models/Posts';
import HomeTemplate from '../../templates/HomeTemplate';
import Navbar from './Navbar';
import Hero from '../../components/Hero';
import Header from './Header';
import Head from '../../components/__head';
import WhoWeAre from './WhoWeAre';
import Projects from './Projects';
import News from './News';
import Contact from './Contact';

class Main extends Component {
  renderBanner = () => {
    const { allSections: sections, banner } = new LandingPageModel(
      this.props.landingPage
    );

    return (
      <Hero
        className="is-primary is-fullheight home__banner"
        head={<Navbar sections={sections} />}
        body={<Header title={banner.title} subtitle={banner.content} />}
      />
    );
  };

  render() {
    const landingPage = new LandingPageModel(this.props.landingPage);
    const projects = new PostsModel(this.props.projects);
    const news = new PostsModel(this.props.news);

    return (
      <HomeTemplate className="index" banner={this.renderBanner()}>
        <Head />
        <WhoWeAre data={landingPage.whoWeAre} />
        <Projects data={landingPage.projects} projects={projects.allPosts} />
        <News data={landingPage.news} news={news.allPosts} />
        <Contact data={landingPage.contact} />
      </HomeTemplate>
    );
  }
}

export default Main;
