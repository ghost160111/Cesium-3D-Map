import "./index.scss";
import Preloader from "components/Preloader";
import { lazy, PureComponent, ReactNode, Suspense } from "react";

const CesiumWrap = lazy(() => import("components/Cesium"));

class App extends PureComponent {
  cesiumViewerBottom: HTMLElement;

  render(): ReactNode {
    return (
      <div className="cesium-wrap">
        <Suspense fallback={<Preloader />}>
          <CesiumWrap />
        </Suspense>
      </div>
    );
  }

  componentDidMount(): void {
    this.cesiumViewerBottom = document.querySelector(".cesium-viewer-bottom");
    if (this.cesiumViewerBottom) {
      this.cesiumViewerBottom.remove();
    }
  }
}

export default App;
