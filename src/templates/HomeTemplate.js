import Body from '../components/__body';
import Footer from '../components/Footer';

const HomeTemplate = ({ banner = '', children, className = '' }) => (
  <Body className={`${className}`}>
    {banner}

    <main className="main">{children}</main>

    <Footer>
      <p>
        <strong>StepUp!</strong> Copyright &copy; 2018. All rights reserved.
      </p>
    </Footer>
  </Body>
);

export default HomeTemplate;
