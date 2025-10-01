import React from "react";

import { Avatar, Button } from "@mui/material";

import { CameraLogo } from "@/app/assets/images/camera";

const FileUploaderBtn = () => {
  return (
    <Button
      size="large"
      sx={{ pl: 3 }}
      startIcon={
        <Avatar sx={{ bgcolor: "transparent", height: 20, width: 20, ml: 1.8 }} src="">
          <CameraLogo />
        </Avatar>
      }
    >
      آپلود تصویر
    </Button>
  );
};
export default FileUploaderBtn;
