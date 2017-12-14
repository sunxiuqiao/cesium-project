import Cesium from 'cesium/Cesium'

const terrainProvieder = new Cesium.CesiumTerrainProvider({
    url: '//assets.agi.com/stk-terrain/world'
})

export function addTerrain(cesiumViewer) {
    cesiumViewer.terrainProvider = terrainProvieder
}