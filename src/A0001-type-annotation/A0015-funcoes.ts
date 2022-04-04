type CallbackFunction = (value: string) => string;

function mapStrings(array: string[], cb: CallbackFunction): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }

  return newArray;
}

console.log(mapStrings(['', '', ''], (string) => string.replaceAll('', '-')));
