import { PureComponent, RefObject, createRef } from "react";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMjk4Yjc3ZS1jYTJkLTRkYWMtYmZlNy1kYzA4YjgyMTdiMjAiLCJpZCI6MjQ3MDY2LCJpYXQiOjE3Mjg1Mzk3NDZ9.-7JmcxLSYtut_Z4ZQKln0gB306vlLJZeiVMQSRbuJUk";

class CesiumWrap extends PureComponent {
  cesiumContainer: RefObject<HTMLDivElement> = createRef();
  viewer: Cesium.Viewer;

  render() {
    return (
      <div
        ref={this.cesiumContainer}
        className="cesium-wrap"
      />
    );
  }

  componentDidMount() {
    this.setupViewer();
  }

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  async setupViewer(): Promise<void> {
    this.viewer = new Cesium.Viewer(this.cesiumContainer.current, {
      terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    this.viewer.resolutionScale = 0.8;

    this.viewer.fullscreenButton.destroy();

    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      }
    });

    const buildingTileset = await Cesium.createOsmBuildingsAsync();
    this.viewer.scene.primitives.add(buildingTileset);
  }
}

export default CesiumWrap;
