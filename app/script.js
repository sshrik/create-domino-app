import {Dobee} from "@sshrik/domino";
import App from '@/src/App/App';
Dobee.registerComponent("domino-app", App);

window.onload = () => {
  Dobee.upgradeComponent();
  document.body.innerHTML = `<domino-app ></domino-app>`;
}  