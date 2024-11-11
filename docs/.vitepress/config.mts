import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portafolio SSPUAESO",
  description: "Portafolio para la materia de Seminario de Solución de Problemas de Uso Adaptación y Explotación de Sistemas Operativos",
  base: '/portfolio-SSPUAESO',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Unidad temática 1', link: '/unit-1' },
      { text: 'Unidad temática 2', link: '/unit-2' }
    ],
    outline: false,
    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'Unidad temática 1: Instalación de sistemas operativos',
        link: '/unit-1',
        items: [
          { text: 'Actividad 1', link: '/unit-1#actividad-1-el-hardware-de-la-computadora-y-el-sistema-operativo' },
          { text: 'Actividad 3', link: '/unit-1#actividad-3-configuracion-de-dispositivos' },
          { text: 'Actividad 4', link: '/unit-1#actividad-4-dispositivos-fisicos' },
          { text: 'Actividad 5', link: '/unit-1#actividad-5-concepto-de-maquina-virtual-y-particion-de-disco' },
          { text: 'Actividad 6', link: '/unit-1#actividad-6-distribuciones-y-licencias-en-un-sistema-operativo' },
          { text: 'Actividad 7', link: '/unit-1#actividad-7-producto-integrador-portafolio-de-evidencias' },
          { text: 'Conclusión', link: '/unit-1#conclusion' },
        ]
      },
      {
        text: 'Unidad temática 2: Configuración de servicios',
        link: '/unit-2',
        items: [
          { text: 'Actividad 8', link: 'unit-2#actividad-8-conociendo-los-procesos-hilos-y-su-entorno' },
          { text: 'Actividad 9', link: 'unit-2#actividad-9-concurrencia-exclusion-mutua-sincronizacion-y-problemas-de-control'},
          { text: 'Actividad 10', link: 'unit-2#actividad-10-exclusion-mutua'},
          { text: 'Actividad 11', link: 'unit-2#actividad-11-productor-consumidor'},
          { text: 'Actividad 12', link: 'unit-2#actividad-12-soluciones-al-interbloqueo-filosofos'},
          { text: 'Actividad 13', link: 'unit-2#actividad-13-producto-integrador-portafolio-de-evidencias'},
          { text: 'Conclusión', link: '/unit-2#conclusion' },
        ]
      }
    ]
  }
})
