import './publicimport'
import Cesium from 'cesium/Cesium'
import 'cesium/Widgets/widgets.css'
import './static/css/index.css'

import {addTerrain} from './modules/addTerrain'

let viewerOption = {
    animation: false,
    timeline: false,
    navigationInstructionsInitiallyVisible: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    infoBox: false,
    selectionIndicator: false,
    clock: null
}

const viewer = new Cesium.Viewer('cesium-container', viewerOption)

addTerrain(viewer)

console.log($('#cesium-container'))