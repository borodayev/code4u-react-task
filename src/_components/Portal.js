// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: React.Element,
};

export default class MyPortal extends React.PureComponent<Props, void> {
  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
