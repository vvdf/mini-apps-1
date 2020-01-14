var convertJSONtoCSV = (jsonTree) => {
  var resultCSV = [];

  // populate property list with the expception of children
  // remove reference to children in property list to iterate over
  var jsonProps = Object.keys(jsonTree);
  jsonProps.pop(); 
  resultCSV.push(jsonProps.slice().join(','));

  var treeToCSV = (treeObj) => {
    var propArray = [];
    jsonProps.forEach(property => propArray.push(treeObj[property]));
    resultCSV.push(propArray.join(','));
    treeObj.children.forEach(childNode => treeToCSV(childNode));
  };

  treeToCSV(jsonTree);

  return resultCSV.join('\n');
};

module.exports = {
  convert: convertJSONtoCSV
};