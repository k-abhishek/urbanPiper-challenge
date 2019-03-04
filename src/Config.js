const config = {
    appName: 'urbanPiper challenge hamburger menu',
    homepage: '/',
    primaryColor: '#88c1f9',
    Url: typeof window === 'undefined' || window.location.hostname === 'localhost' ? '' : '//' + window.location.hostname
  }
export default config
export { config }
  