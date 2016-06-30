const builtins = require('builtins')
const shell = require('shell')

function getPackage() {
  return atom.workspace.getActiveTextEditor().getSelectedText() || atom.workspace.getActiveTextEditor().getWordUnderCursor()
}

module.exports = {
  activate: function () {
    atom.commands.add('atom-text-editor', {
      'npm:open-github-repository': this.ghub,
      'npm:open-package-page': this.npm
    })
  },

  ghub: function () {
    var pkg = getPackage()
    shell.openExternal(`http://ghub.io/${pkg}`)
  },

  npm: function () {
    var pkg = getPackage()
    var url = builtins.indexOf(pkg) > -1
      ? `https://nodejs.org/api/${pkg}.html`
      : `http://npmjs.com/package/${pkg}`
    shell.openExternal(url)
  }
}
