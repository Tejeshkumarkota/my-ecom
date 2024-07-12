import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React, { useState } from "react";

const FavButton = ({ favClick, isfavourite = false }) => {
  let handleOnClick = () => {
    favClick();
  };
  return (
    <div onClick={handleOnClick}>
      {isfavourite  ? (
        <FavoriteIcon className="filled" />
      ) : (
        <FavoriteBorderOutlinedIcon className="outlined" />
      )}
    </div>
  );
};

export default FavButton;
