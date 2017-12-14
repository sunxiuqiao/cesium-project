# 初始环境配置
`yarn install` 或者 `npm install`

# 运行
1. `npm start`
2. 如果出现错误，请删除项目中`node_modules`目录，重新运行`yarn install` 或者 `npm install`
3. 在浏览器中`http://localhost:8080`查看

# 相关开发配置
1. `publicimport.js`中引入用于全局使用的库，例如：`jQuery、lodash`等
2. 目前在index.js中初始化Cesium.Viewer对象，在以后的开发中，如果需要对viewer进行处理，可以在modeles中加入更多的包，以`addTerrain.js`为例：

```
import Cesium from 'cesium/Cesium'

// 配置terrainProvieder
const terrainProvieder = new Cesium.CesiumTerrainProvider({
    url: '//assets.agi.com/stk-terrain/world'
})

// 导出形参中包含cesiumViewer的function，供index中的Cesium.Viewer实例使用
export function addTerrain(cesiumViewer) {
    cesiumViewer.terrainProvider = terrainProvieder
}
```

具体使用则在`index.js`中引入包

```
import {addTerrain} from './modules/addTerrain'

const viewer = new Cesium.Viewer('cesium-container', viewerOption)

// 为viewer添加地形数据
addTerrain(viewer)
```
