window.addEventListener('load', () => {
  const modules = document.querySelectorAll('[data-module]')
  
  modules.forEach((node) => {
    let moduleName = node.dataset.module

    switch (moduleName) {
      case 'page-home':
        import('./modules/pageHome').then((module) => {
          module.default()
        })
        break
      default:
        console.log('module not found!')
        break
    }
  })
})
