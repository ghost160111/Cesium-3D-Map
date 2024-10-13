import "./style.css";

// @ts-expect-error test
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMjk4Yjc3ZS1jYTJkLTRkYWMtYmZlNy1kYzA4YjgyMTdiMjAiLCJpZCI6MjQ3MDY2LCJpYXQiOjE3Mjg1Mzk3NDZ9.-7JmcxLSYtut_Z4ZQKln0gB306vlLJZeiVMQSRbuJUk";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
// @ts-expect-error test
new Cesium.Viewer("cesiumContainer", {
  // @ts-expect-error test
  terrain: Cesium.Terrain.fromWorldTerrain(),
});