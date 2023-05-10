import React from "react";
import ContactsIcon from '@mui/icons-material/Contacts';
import DescriptionIcon from '@mui/icons-material/Description';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { ProgressBarProps } from "./types";
import {
  ParentContainer,
  MarginArea,
  DotOne,
  DotTwo,
  DotThree,
  DotFour,
  First,
  Second,
  Third,
  IconContainer,
  Cero
} from "./styles";


function ProgressBar(props: ProgressBarProps) {
  const { progress } = props;

  return (
    <ParentContainer>
      <MarginArea>
        <DotOne color={progress>=1 ? "#001940" : "#7E7D7D"} width={progress===1? "60px":"50px"} height={progress===1? "60px":"50px"}>
          <IconContainer>
            <ContactsIcon fontSize={progress===1 ? "large": "medium"}/>
          </IconContainer>
        </DotOne>
        <DotTwo color={progress>=2 ? "#001940" : "#7E7D7D"} width={progress===2? "60px":"50px"} height={progress===2? "60px":"50px"}>
          <IconContainer>
            <DescriptionIcon fontSize={progress===2 ? "large": "medium"}/>
          </IconContainer>
        </DotTwo>
        <DotThree color={progress>=3 ? "#001940" : "#7E7D7D"} width={progress===3? "60px":"50px"} height={progress===3? "60px":"50px"}>
          <IconContainer>
            <MonetizationOnOutlinedIcon fontSize={progress===3 ? "large": "medium"}/>
          </IconContainer>
        </DotThree>
        <DotFour color={progress>=4 ? "#001940" : "#7E7D7D"} width={progress===4? "60px":"50px"} height={progress===4? "60px":"50px"}>
          <IconContainer>
            <GppGoodOutlinedIcon fontSize={progress===4 ? "large": "medium"}/>
          </IconContainer>
        </DotFour>
        <Cero/>
        <First color={progress>1 ? "#001940" : "#7E7D7D"} />
        <Second color={progress>2 ? "#001940" : "#7E7D7D"} />
        <Third color={progress>3 ? "#001940" : "#7E7D7D"} />
      </MarginArea>
    </ParentContainer>
  );
}
export default ProgressBar;
