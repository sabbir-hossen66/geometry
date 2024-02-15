function variousParameter() {
  const anything = getInputValue('width')
  console.log(anything);
  const something = getInputValue('height')
  console.log(something);
  // const result = getInputValue('result')
  const mainResult = anything * something;
  console.log(mainResult);

  setInnerTextById('result', mainResult)
}
function getInputValue(input) {
  const widthField = document.getElementById(input)
  const widthValue = widthField.value;
  const inputValue = parseFloat(widthValue)
  return inputValue;
}

function setInnerTextById(element, mainResult) {
  const doSome = document.getElementById(element);
  doSome.value = mainResult;
}
