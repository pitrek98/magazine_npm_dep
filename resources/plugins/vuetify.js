import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                denim: '#1486B8',
                jazzberryJam: '#810D60',
                darkSlateBlue: '#4A4186',
                gainsboro: '#E2E2E2',
                lavender: "#F2F9FC",
                toryBlue: "#375292",
                whiteSmoke: "#F5F5F5",
                pastelGreen: "#68D578",
                persianRed: "#D53535",
                silver: "#B5B5B5",
                dimGray: "#666666",
                empress: "#757575"
            },
        },
    },
}

export default new Vuetify(opts)
