import {Component} from '@sshrik/domino';
import icon from '@/resource/dominoIcon.png';
import './descriptor.css';

export default class Descriptor extends Component {
  constructor() {
    super();
  }
  
  render() {
    return `
    <div class="disc-container">
      <img src="${icon}" />
    </div>
    `;
  }
}