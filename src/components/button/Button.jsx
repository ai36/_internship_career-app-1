import React from "react";
import styles from "./Button.module.css";
import { clsx } from "@utils/clsx";

const Button = ({
  view = "",
  children,
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        styles.baseButton,
        disabled && styles.disabled,
        className,
        view && styles[view]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
