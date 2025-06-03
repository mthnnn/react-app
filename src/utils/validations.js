export function isEmail(value) {
  // validasyon fonksiyonlarını yazıyoruz
  var re = /\S+@\S+\.\S+/; // email formatını kontrol eden regex ifadesi
  return re.test(value);
}

export function isNotEmpty(value) {
  return value.trim() != ""; //girdiğiniz değer boşluğa eşit değilmi yada değilse true döner
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength; // minLength kontrolü yapan fonksiyon
}

export function isEquals(value, valueToCompare) {
  return value === valueToCompare; // iki değerin eşitliğini kontrol eden (parola için) eşitse true döner
}
