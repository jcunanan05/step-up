import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';
import MarkdownContent from '../../components/MarkdownContent';

const address = `
### Find us at: 

2125 Weston Road,

York, Ontario

M9N 1X8
`;

const GoogleMaps = ({ className = '' }) => (
  <iframe
    className={className}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429.58463495213556!2d-79.52471328289623!3d43.70276019974456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b30daff195f09%3A0xbf4debef94828d6!2sSt.+John&#39;s+Weston!5e0!3m2!1sen!2sca!4v1540417926721"
    frameBorder="0"
    allowFullScreen
  />
);

const Contact = () => (
  <Section name="Contact Us">
    <h2 className="section__title title is-2">Contact Us</h2>
    <Columns>
      <Column className="is-6">
        <MarkdownContent content={address} />
      </Column>
      <Column className="is-6">
        <GoogleMaps className="google-maps" />
      </Column>
    </Columns>
  </Section>
);

export default Contact;
