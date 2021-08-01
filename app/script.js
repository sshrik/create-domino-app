import {Dobee} from "@sshrik/domino";
import App from '@/component/App/App';
Dobee.registerComponent("ex-app", App);

window.onload = () => {
  Dobee.upgradeComponent();
  document.body.innerHTML = `<ex-app ></ex-app>`;
}  