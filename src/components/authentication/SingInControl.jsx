import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../style/AddData.module.css";
import Modal from "../../modals/ErrorModal";
import { SaveData } from "../../utils/storage/DataStorage";
import { passowrdControl, emailControl } from "../../utils/InputControls";

const SingInControl = () => {
  const [styleControl, setStyleControl] = useState(null);
  const [password_, setPassword] = useState(null);
  const [email_, setEmail] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);

  let modal_root = document.getElementById("error-modal-root");
  let emailStyle = document.getElementById("email_id");
  let passwordStyle = document.getElementById("password_id");
  let navigate = useNavigate();
  const defaultColor = "#686868";
  const errorColor = "rgba(255, 0, 0, 0.7)";

  const handleChangePassword = (e) => {
    setPasswordValue(passowrdControl(e.target.value));
    setPassword(e.target.value);
    password_ ? setStyleControl(defaultColor) : setStyleControl(errorColor);
    passwordStyle.style.color = `${styleControl}`;
  };

  const handleChangeEmail = (e) => {
    setEmailValue(e.target.value);
    setEmail(emailControl(e.target.value));
    email_ ? setStyleControl(defaultColor) : setStyleControl(errorColor);
    emailStyle.style.color = `${styleControl}`;
  };

  const addBtn = () => {
    let mixdata = { password_, emailValue };
    password_ && email_ ? SaveData(mixdata) : console.log();
    modal_root.style.visibility = "visible";
    window.location.reload();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.inputs_container}>
        <h2 className={style.title}>SingIn</h2>

        <div className={style.input_item}>
          <p id="email_id">Email</p>
          <input
            className={style.input_class_farklı}
            type="text"
            placeholder="Enter a e-mail (abc@xyz.com)"
            onChange={handleChangeEmail}
          />
        </div>

        <div className={style.input_item}>
          <p id="password_id">Password</p>
          <input
            className={style.input_class}
            type="text"
            placeholder="Enter a password"
            onChange={handleChangePassword}
          />
        </div>

        {emailValue && passwordValue ? (
          <>
            <div className={style.add_btn} onClick={addBtn}>
              <p>Sing in</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {!(emailValue && passwordValue) ? (
        <Modal password={passwordValue} email={emailValue} />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SingInControl;
