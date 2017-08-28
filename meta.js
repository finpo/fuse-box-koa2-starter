module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'FINPO project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  yarn # Or npm install\n  yarn run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  yarn # Or npm install\n  yarn run dev{{/inPlace}}'
};
