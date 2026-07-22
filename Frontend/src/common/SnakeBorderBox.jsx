import React from "react";

export default function SnakeBorderBox({
  children,
  className = "",
  alwaysActive = false,
  ...props
}) {
  return (
    <div
      className={`group relative overflow-hidden ${
        alwaysActive ? "snake-box-always" : ""
      } ${className}`}
      {...props}
    >
      {/* 4 Moving Snake Light Border Lines (Active on Hover) */}
      <span className="snake-line snake-line-top" />
      <span className="snake-line snake-line-right" />
      <span className="snake-line snake-line-bottom" />
      <span className="snake-line snake-line-left" />

      {children}
    </div>
  );
}
