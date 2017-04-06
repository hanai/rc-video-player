const svgIcons = require.context('assets/icons', false, /.*\.svg$/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(svgIcons);
