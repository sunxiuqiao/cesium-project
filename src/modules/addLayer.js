import Cesium from 'cesium/Cesium'

export function addLayer(cesiumViewer) {
    var layers = cesiumViewer.scene.imageryLayers;
    layers.addImageryProvider(new Cesium.createTileMapServiceImageryProvider({
        url: '//cesiumjs.org/tilesets/imagery/blackmarble',
        maximumLevel: 8,
        credit: 'Black Marble imagery courtesy NASA Earth Observatory'
    }));
}
