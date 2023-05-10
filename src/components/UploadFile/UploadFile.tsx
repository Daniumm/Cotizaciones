import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import Box from "@mui/material/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import {
  BoldText,
  BtnContainer,
  DropZone,
  ShowIcon,
  UploadFileContainer,
} from "./styles";
import { UploadFileProp } from "./types";
import Button from "components/Button/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const UploadFile: React.FC<UploadFileProp> = ({ status = 0 }) => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(true);

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFile(file);
  };

  const handleFileSelection = (event: any) => {
    const file = event.target.files[0];
    console.log(typeof file);
    setFile(file);
  };

  const handleReplaceFile = () => {
    setFile(null);
    setUploaded(false);
    setButtonIcon(true);
  };

  useEffect(() => {
    if (file !== null) {
      setUploaded(true);
      setButtonIcon(false);
    }
  }, [file]);

  return (
    <UploadFileContainer>
      <Card>
        <CardContent>
          {uploaded === false ? (
            <DropZone
              onDrop={handleDrop}
              onDragOver={(event) => event.preventDefault()}
            >
              <input
                type="file"
                id="fileInput"
                onChange={handleFileSelection}
                style={{ display: "none" }}
              />
              <SystemUpdateAltIcon
                sx={{
                  height: 80,
                  width: 80,
                  verticalAlign: "middle",
                }}
              />
              <Typography variant="body1">
                Arrastra y suelta tus archivos para subirlos
              </Typography>
            </DropZone>
          ) : null}

          {uploaded ? (
            <ShowIcon>
              <CheckCircleIcon
                sx={{
                  width: 50,
                  height: 50,
                  color: status === 1 ? "green" : "gray",
                }}
              />
              <BoldText>
                {status == 1
                  ? "El documento ha sido verificado"
                  : "El documento está pendiente de verificación"}{" "}
              </BoldText>
            </ShowIcon>
          ) : null}
          <BtnContainer>
            <Button
              size="medium"
              color="white"
              bgColor="#002569"
              hoverColor="black"
              firstIcon="Upload"
              firstIconBool={buttonIcon}
              secondIcon="Delete"
              secondIconBool={false}
              onClick={() =>
                uploaded
                  ? handleReplaceFile()
                  : document.getElementById("fileInput")?.click()
              }
            >
              {!uploaded ? "Subir archivo" : "Reemplazar archivo"}
            </Button>
          </BtnContainer>
        </CardContent>
      </Card>
    </UploadFileContainer>
  );
};

export default UploadFile;
