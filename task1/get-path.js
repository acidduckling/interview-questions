const logging = true;

const grpLog = (name, log) => {
  if (logging) {
    console.group(name);
    console.log(log[name]);
    console.groupEnd();
  }
}

/**
 * Get the value of deeply nested property in an object by safely traversing through the properties
 * @param {Array<string>} path Array of property names that serve as a path to the desired property
 * @param {object} initObj The object that will be traversed
 */
const getPath = (path, initObj) =>
  path.reduce((obj, prop) => {
    grpLog(prop, obj);
    return obj && obj[prop] ? obj[prop] : undefined;
  }, initObj);

module.exports = getPath;
