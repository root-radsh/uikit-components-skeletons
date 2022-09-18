import React from "react";
import "./index.css";
export const Skeleton = ({ type }) => {
  const clx = `skeleton ${type}`;
  return (
    <div className={clx}>
      <div className="shimmer-wrapper">
        <div className="shimmer" />
      </div>
    </div>
  );
};
