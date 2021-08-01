import {Component} from '@sshrik/domino';
import guitar from './guitar.jpg';

export default class PictureInfo extends Component {
  constructor() {
    super();
  }
  
  render() {
    this.useEvent('img', 'click', () => {
      console.log(this.props);
      this.props.onPictureClick();
    });

    return `
    <div class="picture-info-container">
      <img src="${guitar}" />
      <p>${this.props.infoText}</p>
    </div>
    `;
  }
}