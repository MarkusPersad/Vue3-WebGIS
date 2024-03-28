import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import CesiumProp from './Cesium.json'

const app = createApp(App)
app.use(VueCesium, {
    cesiumPath: CesiumProp.CesiumProperties.CesiumPath,
    accessToken: CesiumProp.CesiumProperties.AccessToken,
})
app.mount('#app')
