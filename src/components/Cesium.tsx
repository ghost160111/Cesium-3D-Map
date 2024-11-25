import { lazy, PureComponent, ReactNode, Suspense } from "react";
import Preloader from "./Preloader";

const Viewer = lazy(async () => {
  const module = await import("resium");
  const Viewer = module.Viewer;
  return {
    default: Viewer,
  };
});

class CesiumWrap extends PureComponent {
  render(): ReactNode {
    return (
      <Suspense fallback={<Preloader />}>
        <div className="cesium">
          <h1 className="main-title">Cesium powered with React Ecosystem</h1>
          <Viewer full />
        </div>
      </Suspense>
    );
  }
}

export default CesiumWrap;
