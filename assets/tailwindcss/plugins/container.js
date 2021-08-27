const _ = require('lodash');

module.exports = function ({
  addUtilities, e, theme, variants,
}) {
  const container = theme('container', {});
  const utilities = _.map(container, (value, name) => ({
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

      [`@media (min-width: ${name}px)`]: {
        paddingLeft: theme('spacing.0'),
        paddingRight: theme('spacing.0'),
      },
    },
  }));

  addUtilities(utilities, ['responsive']);
};
