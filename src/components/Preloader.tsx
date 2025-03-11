import "./Preloader.scss";
import { PureComponent, ReactNode } from "react";
import LoadingText from "./LoadingText";

class Preloader extends PureComponent {
  render(): ReactNode {
    return (
      <div className="loader">
        <LoadingText />
        <div className="spinner-loader" />
      </div>
    );
  }
}

export default Preloader;
