import { PaginationItem, PaginationItemProps } from "@mui/material";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from "react";
import { PaginationProp } from "./types";

const PaginationComponent: React.FC<PaginationProp> = ({
    pages,
}) => {
    return (
        <Stack spacing={2} alignItems="center">
            <Pagination
                count={pages}
                shape="rounded"
                size="large"
                showFirstButton 
                showLastButton
                siblingCount={2}
                boundaryCount={2}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{
                            first: KeyboardDoubleArrowLeftIcon,
                            previous: KeyboardArrowLeftIcon,
                            next: KeyboardArrowRightIcon,
                            last: KeyboardDoubleArrowRightIcon
                        }}
                        {...item}
                    />
                )}
            />
        </Stack>
    );
};

export default PaginationComponent;
