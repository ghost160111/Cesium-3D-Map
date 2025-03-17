import "./Attribution.scss";
import { PureComponent, ReactNode } from "react";

class Attribution extends PureComponent {
  render(): ReactNode {
    return (
      <div className="attribution-devcybercode">
        <span>Powered by <a href="https://devcybercode.com" target="_blank">devcybercode.com</a></span>
      </div>
    );
  }
}

export default Attribution;
