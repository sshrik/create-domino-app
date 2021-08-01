import {Component} from '@sshrik/domino';
import './footer.css'

export default class Footer extends Component {
  constructor() {
    super();
  }
  
  render() {
    return `
    <div class="footer-container">
      <p class="footer-text">Copyright 2021. sshrik. All rights reserved. </p>
    </div>
    `;
  }
}