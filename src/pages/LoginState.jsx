import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validations";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError, //hasErroru, seInputdaki return bloğundaki tanımlananları props parametresi ile alıp hasError true olur.
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); // bir kere kullanacağımız için arrow function kullanırız.
  // email e validasyon fonksiyonunu geçiyoruz. eiEmail validasyon fonksiyonu isEmail ve isNotEmpty fonksiyonlarını kullanarak emailin geçerli olup olmadığını kontrol ediyor bu fonksiyon ile

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError, // password için de aynı şekilde validasyon fonksiyonunu geçiyoruz. props parametresi
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleFormSubmit(e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
      return; // Eğer email veya password hatalıysa formu göndermiyoruz
    }

    console.log(emailValue, passwordValue); // diğer türlü formu gönderiyoruz ve email ve password değerlerini konsola yazdırıyoruz.
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <Input
                  id="email"
                  name="email"
                  labelText="Email"
                  error={emailHasError && "Geçerli email giriniz"}
                  type="email"
                  value={emailValue}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                />

                <Input
                  id="password"
                  name="password"
                  labelText="Password"
                  error={passwordHasError && "Min. 5 karakter giriniz"}
                  type="password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur} //dışardan input huukuna gönderdiğimiz onBlur fonksiyonu ile inputun blur olayını yakalıyoruz ve handlePasswordBlur fonksiyonunu çağırıyoruz. ve işimizi daha kolaylaştırıyoruz.
                />

                <button className={`btn btn-outline-${btnColor}`}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
