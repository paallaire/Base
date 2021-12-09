const _ = require('lodash');

module.exports = function ({
  addComponents, e, theme, variants,
}) {
  const container = theme('container', {});
  const components = _.map(container, (value, name) => ({
    [`.${e(`container-${name}`)}`]: {
      maxWidth: `${value}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [`.${e(`container-${name}-px`)}`]: {
      maxWidth: `${value}`,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme('spacing.4'),
      paddingRight: theme('spacing.4'),

      '@media (min-width: 1024px)': {
        paddingLeft: theme('spacing.6'),
        paddingRight: theme('spacing.6'),
      },

      '@media (min-width: 1440px)': {
        paddingLeft: theme('spacing.8'),
        paddingRight: theme('spacing.8'),
      },

    },
  }));

  addComponents(components, ['responsive']);
};
