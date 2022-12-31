const _ = require('lodash');

module.exports = function ({
  addComponents, e, theme, variants,
}) {
  const container = theme('container', {});
  const screens = theme('screens', {});
  const components = _.map(container.units, (value, name) => ({

    [`.${e(`container-${name}`)}`]: {
      maxWidth: `${value}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [`.${e(`container-${name}-px`)}`]: {
      maxWidth: `${value}`,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme('container.spacing.sm'),
      paddingRight: theme('container.spacing.sm'),
    },
  }));

  addComponents(components, ['responsive']);
};
