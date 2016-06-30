module.exports = {
  activate: function () {
    atom.commands.add('atom-text-editor', {
      'npm-doc:open-github-repository': this.ghub,
      'npm-doc:open-package-page': this.npm
    })
  },

  ghub: function () {
    var pkg = atom.workspace.getActiveTextEditor().getSelectedText() || atom.workspace.getActiveTextEditor().getWordUnderCursor()
    require('shell').openExternal('http://ghub.io/' + pkg)
  },

  npm: function () {
    var pkg = atom.workspace.getActiveTextEditor().getSelectedText() || atom.workspace.getActiveTextEditor().getWordUnderCursor()
    if ()
    require('shell').openExternal('http://npm.im/' + pkg)
  }
}
