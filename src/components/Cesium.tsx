import "./Cesium.scss";
import { PureComponent, RefObject, createRef, ReactNode } from "react";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMjk4Yjc3ZS1jYTJkLTRkYWMtYmZlNy1kYzA4YjgyMTdiMjAiLCJpZCI6MjQ3MDY2LCJpYXQiOjE3Mjg1Mzk3NDZ9.-7JmcxLSYtut_Z4ZQKln0gB306vlLJZeiVMQSRbuJUk";

class CesiumWrap extends PureComponent {
  cesiumViewerBottom: HTMLElement;
  cesiumContainer: RefObject<HTMLDivElement> = createRef();
  viewer: Cesium.Viewer;

  render(): ReactNode {
    return (
      <>
        <div
          ref={this.cesiumContainer}
          className="cesium-wrap"
        />
        <div className="attribution-devcybercode">
          <span>Powered by <a href="https://devcybercode.com" target="_blank">devcybercode.com</a></span>
        </div>
      </>
    );
  }

  componentDidMount(): void {
    this.setupViewer();

    this.cesiumViewerBottom = document.querySelector(".cesium-viewer-bottom");
    if (this.cesiumViewerBottom) {
      this.cesiumViewerBottom.remove();
    }
  }

  componentWillUnmount(): void {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  async setupViewer(): Promise<void> {
    this.viewer = new Cesium.Viewer(this.cesiumContainer.current, {
      terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    this.viewer.fullscreenButton.destroy();

    const buildingTileset = await Cesium.createOsmBuildingsAsync();
    this.viewer.scene.primitives.add(buildingTileset);
  }
}

export default CesiumWrap;
