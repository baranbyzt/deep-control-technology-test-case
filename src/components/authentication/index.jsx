import React from "react";
import LoginControl from "./LoginControl";
import SingInControl from "./SingInControl";
import style from "../../style/Authentication.module.css";

const Authentication = () => {
  const [select, setSelect] = React.useState(false);

  let componentSelect = () => {
    select ? setSelect(false) : setSelect(true);
  };

  return (
    <div className={style.wrapper}>
      <span className={style.container}>
        <div
          style={{ background: select !== false ? "white" : "#3bb300" }}
          className={style.btn}
          onClick={componentSelect}
        >
          <p>LogIn</p>
        </div>
        <div
          style={{ background: select !== false ? "#3bb300" : "white" }}
          className={style.btn}
          onClick={componentSelect}
        >
          <p>SingIn</p>
        </div>
      </span>
      <hr />
      {select ? <SingInControl /> : <LoginControl />}
    </div>
  );
};

export default Authentication;
