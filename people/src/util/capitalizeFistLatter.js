
/*
Transfoma a priemira letra de uma palavra em maiúscula
*/
const captitalizeFirstlatter = string => {
  return string[0].toUpperCase() + string.slice(1);
};

export default captitalizeFirstlatter;