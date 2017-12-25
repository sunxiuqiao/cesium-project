import './publicimport'
import Cesium from 'cesium/Cesium'
import 'cesium/Widgets/widgets.css'
import './static/css/index.css'

import {addTerrain} from './modules/addTerrain'
/*import {addEntity} from './modules/addEntity'
*//*import {addDixing} from './modules/addLayer'
import {addImage} from './modules/addLayer'*/

/*import {add} from './modules/addLayers'*/

let viewerOption = {
    animation: true,
    timeline: true,
    navigationInstructionsInitiallyVisible: true,
    navigationHelpButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    infoBox: false,
    selectionIndicator: true,
    clock: null,
    vrButton : true,
    scene3DOnly:true,
    geocoder:true,//是否显示geocoder小器件，右上角查询按钮    
    fullscreenButton:true,//是否显示全屏按钮  
    selectedTerrainProviderViewModel : undefined,//当前地形图层的显示模型，仅baseLayerPicker设为true有意义   
    terrainProviderViewModels : Cesium.createDefaultTerrainProviderViewModels(),//可供BaseLayerPicker选择的地形图层ProviderViewModel数组    
    imageryProviderViewModels : Cesium.createDefaultImageryProviderViewModels(),//可供BaseLayerPicker选择的图像图层ProviderViewModel数组

}

const viewer = new Cesium.Viewer('cesium-container',viewerOption)

addTerrain(viewer)
/*add(Viewer)*/
console.log(viewer.entities)
/*addEntity(viewer)*/
/*addImage(viewer)
console.log(viewer.entities)*/


console.log($('#cesium-container'))