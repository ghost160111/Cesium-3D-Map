import { PureComponent, ReactNode } from "react";
import "./Preloader.scss";

class Preloader extends PureComponent {
  render(): ReactNode {
    return (
      <div className="loader">
        <h2>Loading maps</h2>
        <div className="spinner-loader" />
      </div>
    );
  }
}

export default Preloader;
