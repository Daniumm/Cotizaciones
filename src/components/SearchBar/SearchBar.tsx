import React, { useState } from 'react'
import { SearchBarWrapper, AdditionalWrapper, ButtonContainer, SearchBarContainer, ButtonsContainer } from "./styles"
import { Clear, Search } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton, Divider } from '@mui/material';
import { SearchBarProp } from './types';
import { Button } from 'components/Button';

const SearchBar: React.FC<SearchBarProp> = ({
    label,
    searchClick,
    title,
    btnText,
    btnHandler,
    barType
}) => {

    const [searchText, setSearchText] = useState("");

    return (
        <>
            {barType === 'normal' ? (
                <SearchBarWrapper>
                    {!!title && (
                        <AdditionalWrapper>
                            {title}
                            {!!btnText && (
                                <ButtonContainer>
                                    <Button
                                        bgColor="#002569"
                                        color="white"
                                        firstIcon="Person"
                                        firstIconBool
                                        hoverColor="black"
                                        onClick={btnHandler}
                                        size="large"
                                    >
                                        {btnText}
                                    </Button>
                                </ButtonContainer>
                            )}
                        </AdditionalWrapper>
                    )}
                    <SearchBarContainer>
                        <TextField
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            fullWidth
                            size="small"
                            placeholder={label}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <ButtonsContainer>
                                            <IconButton onClick={() => { setSearchText("") }}>
                                                <Clear />
                                            </IconButton>
                                            <Divider orientation="vertical" variant="middle" flexItem />
                                            <IconButton onClick={() => { searchClick(searchText) }}>
                                                <Search />
                                            </IconButton>
                                        </ButtonsContainer>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </SearchBarContainer>
                </SearchBarWrapper>

            ) : (
                <TextField
                    value={searchText}
                    fullWidth
                    onChange={(e) => setSearchText(e.target.value)}
                    size='small'
                    placeholder={label}
                    InputProps={{
                        style: {
                            borderRadius: '15px',
                            fontSize: "12px",
                            backgroundColor: '#f8f8f8',
                            top: '4px'
                        },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => { searchClick(searchText) }}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

            )}

        </>
    )
}

export default SearchBar