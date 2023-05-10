import {Accordion,
        AccordionActions,
        AccordionDetails,
        AccordionSummary,
        Typography,
        styled} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQprops } from "./types";

const StyledQuestion = styled(Typography)({
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '30px',
    fontFeatureSettings: 'salt on liga off',
})

const StyledAnswer = styled(Typography)({
    fontFamily: 'Inter, sans serif',
    fontWeight: 300,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#7E7D7D',
})

const FAQ: React.FC<FAQprops> = ({
    id,
    question,
    answer,
    disabled
}) => {
    return (
        <div>
            <Accordion
                sx={{backgroundColor: '${theme.palette.background.paper}',
                    boxShadow: 'none'
                }}>
                <AccordionSummary
                    sx={{paddingTop:1, marginLeft:1.1}}
                    expandIcon={<ExpandMoreIcon sx={{color:'black'}} />}
                    aria-controls={`${id}panel1a-content`}
                    id={`${id}FAQ`}
                >
                    <StyledQuestion>
                        {question}
                    </StyledQuestion>
                </AccordionSummary>
                <AccordionDetails
                    sx={{marginLeft:5.2,
                        paddingRight:8.5,
                        textAlign: 'justify',
                        paddingBottom:5}}>
                    <StyledAnswer>
                        {answer}
                    </StyledAnswer>
                </AccordionDetails>
            </Accordion>            
        </div>
    )
}

export default FAQ;