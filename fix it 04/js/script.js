const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => 
  `<${tagname}>${content}</${tagname}>`;
//curly braces overbodig en weggedaan

document.write(`<ol>`);
tvshows.forEach(tvshow => document.write(wrapWithTag(tvshow, `li`)));
document.write(`</ol>`);
//tvshow(s) juist geschreven