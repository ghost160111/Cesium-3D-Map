import { PureComponent, RefObject, createRef, ReactNode } from "react";
import { Viewer, Ion, Terrain, createOsmBuildingsAsync } from "cesium";
import Attribution from "./Attribution";

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMjk4Yjc3ZS1jYTJkLTRkYWMtYmZlNy1kYzA4YjgyMTdiMjAiLCJpZCI6MjQ3MDY2LCJpYXQiOjE3Mjg1Mzk3NDZ9.-7JmcxLSYtut_Z4ZQKln0gB306vlLJZeiVMQSRbuJUk";

class CesiumWrap extends PureComponent {
  cesiumViewerBottom: HTMLElement;
  cesiumContainer: RefObject<HTMLDivElement> = createRef();
  viewer: Viewer | null;

  render(): ReactNode {
    return (
      <>
        <div
          ref={this.cesiumContainer}
          className="cesium-wrap"
        />
        <Attribution />
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
    this.viewer = new Viewer(this.cesiumContainer.current, {
      terrain: Terrain.fromWorldTerrain(),
    });

    this.viewer.fullscreenButton.destroy();

    const buildingTileset = await createOsmBuildingsAsync();
    this.viewer.scene.primitives.add(buildingTileset);
  }
}

export default CesiumWrap;
