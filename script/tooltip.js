'use strict';

const e = React.createElement;

class Sold extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Sold';
    }

    return e('button', { onClick: () => this.setState({ liked: true }) }, 'Sell' );
  }
}

const domContainer = document.querySelector('#sold');
ReactDOM.render(e(Sold), domContainer);