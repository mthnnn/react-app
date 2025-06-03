import { useState } from "react";

export default function useInput(initialValue, validationFn) {
  //dışardan göndermiş olduğumuz initialValue ve validationFn parametrelerini değerleri alıyoruz
  const [value, setValue] = useState(initialValue);
  const [isEdited, setIsEdited] = useState(false);

  const isValid = validationFn(value); // validation function bize değer getirirse isValid true

  function handleInputBlur() {
    setIsEdited(true);
  }

  function handleInputChange(e) {
    setValue(e.target.value);
    setIsEdited(false);
  }

  return {
    value,
    handleInputBlur,
    handleInputChange,
    hasError: isEdited && !isValid, //eğer input düzenlenmişse ve geçerli değilse hata var demektir
  }; // edit etme aktif ve değer girilmemişse yani isValid false ise onun değilini al ve o da true olmuş oluyor. ikisi de true ise has error true oluyor.
  // hasError if the input is edited and not valid
}
