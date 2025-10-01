import "./Attribution.scss";
import { PureComponent, ReactNode } from "react";

class Attribution extends PureComponent {
  render(): ReactNode {
    return (
      <div className="attribution-devcybercode">
        <span>Powered by <a href="https://enzora.uz target="_blank">Enzora.uz</a></span>
      </div>
    );
  }
}

export default Attribution;
