import {Component} from '@sshrik/domino';
import './header.css'

export default class Header extends Component {
  constructor() {
    super();
  }
  
  render() {
    return `
    <p class="domino-header">${this.innerText}</p>
    `;
  }
}