import { PureComponent, RefObject, createRef } from "react";
import Cesium from "cesium";

class CesiumWrap extends PureComponent {
  cesiumContainer: RefObject<HTMLDivElement> = createRef();
  viewer;
  
  componentDidMount() {
    this.viewer = new Cesium.Viewer(this.cesiumContainer, {
      full: true,
    });
  }

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  render() {
    return (
      <div
        ref={this.cesiumContainer}
        className="cesium"
      />
    );
  }
}

export default CesiumWrap;
