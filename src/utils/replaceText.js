// const arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
const matchUpperCaseLetter = /^[А-Я]$/;
const matchAlphabet = /[а-я]/gi;

const replaceChar = (character, map) => {
  const newChar = map.get(character.toLowerCase());
  return character.match(matchUpperCaseLetter) ? newChar.toUpperCase() : newChar;
}

const replaceText = (text, map) => {
  const oldText = text.split("");
  let newText = "";

  for (let i = 0; i < oldText.length; i++) {
    let newChar = oldText[i].match(matchAlphabet) ? replaceChar(oldText[i], map) : oldText[i];
    newText = newText + newChar;
  };

  return newText;
};

export default replaceText;
