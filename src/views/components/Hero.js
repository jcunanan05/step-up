import { Component } from 'react';

class Hero extends Component {
  renderPart(part, children) {
    if (children == '') return '';
    return <div className={`hero-${part}`}>{children}</div>;
  }

  render() {
    const { head = '', body = '', foot = '', className = '' } = this.props;
    return (
      <section className={`hero ${className}`}>
        {this.renderPart('head', head)}
        {this.renderPart('body', body)}
        {this.renderPart('foot', foot)}
      </section>
    );
  }
}

export default Hero;
