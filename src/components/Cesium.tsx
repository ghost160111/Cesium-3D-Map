import { PureComponent, ReactNode } from "react";
import { Viewer } from "resium";

class CesiumWrap extends PureComponent {
  render(): ReactNode {
    return (
      <div className="cesium">
        <Viewer full />
      </div>
    );
  }
}

export default CesiumWrap;
