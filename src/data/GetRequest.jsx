import React from 'react';
import { ocr_api } from '../.env/OcrConfig';

class GetReq extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.props.data
  }

  componentDidMount() {
    myInit = {
      method: 'POST',

    };

    fetch(URL, {
      method: 'POST',
      body:
    })

  }

}
