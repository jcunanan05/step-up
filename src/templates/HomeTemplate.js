import Body from '../components/__body';
import Navbar from '../components/Navbar';
import Item from '../components/Navbar/Item';
import Footer from '../components/Footer';

const HomeTemplate = ({ children }) => (
  <Body>
    {/* hero banner */}
    <section className="hero is-dark is-fullheight">
      <div className="hero-head">
        <Navbar brand={<Item text="StepUP" />} right={<Item text="Home" />} />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">StepUP!</h1>
          <h2 className="subtitle">Community Initiative</h2>
        </div>
      </div>
    </section>

    <main className="main">{children}</main>

    <Footer>
      <p>
        <strong>StepUp!</strong> Copyright &copy; 2018. All rights reserved.
      </p>
    </Footer>
  </Body>
);

export default HomeTemplate;
