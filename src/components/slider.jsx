import React from "react";

export default function BGImage({ src, children }) {
  return (
    <div
      className="image-main"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="text-center">{children}</div>
    </div>
  );
}
