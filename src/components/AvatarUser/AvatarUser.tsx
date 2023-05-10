import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { AvatarCustomProp } from "./types";
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { StyledBadgeLarge, StyledBadgeMedium, StyledBadgeSmall, StyledBadgeLargeLogo, StyledBadgeMediumLogo, StyledBadgeSmallLogo,} from './styles'

const GetTypeEdit = (size: string, setImage: string) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file); 
        }
    };
    if (size == "Large") {
        return (
            <StyledBadgeLarge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                        <EditIcon sx={{ fontSize: '100%', color: '#ffffff' }} />
                    </IconButton>
                }>
                <Avatar src={selectedImage || setImage} sx={{ width: 225, height: 225 }}></Avatar>
            </StyledBadgeLarge>
        );
    }
    if (size == "Medium") {
        return (
            <StyledBadgeMedium
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                        <EditIcon sx={{ fontSize: '85%', color: '#ffffff' }} />
                    </IconButton>
                }>
                <Avatar src={selectedImage || setImage} sx={{ width: 115, height: 115 }}></Avatar>
            </StyledBadgeMedium>
        );
    }
    return (
        <StyledBadgeSmall
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                    <EditIcon sx={{ fontSize: '65%', color: '#ffffff' }} />
                </IconButton>
            }>
            <Avatar src={selectedImage || setImage} sx={{ width: 50, height: 50 }} ></Avatar>
        </StyledBadgeSmall>
    );
}

const GetTypeLogo = (size: string, setImage: string, setLogo: string) => {
    if (size == "Large") {
        return (
            <StyledBadgeLargeLogo
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <Avatar src={setLogo} sx={{ width: 225*.25, height: 225*.25 }}/>
                }>
                <Avatar src={setImage} sx={{ width: 225, height: 225 }}></Avatar>
            </StyledBadgeLargeLogo>
        );
    }
    if (size == "Medium") {
        return (
            <StyledBadgeMediumLogo
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <Avatar src={setLogo} sx={{ width: 115*.35, height: 115*.35 }}/>
                }>
                <Avatar src={setImage} sx={{ width: 115, height: 115 }}></Avatar>
            </StyledBadgeMediumLogo>
        );
    }
    return (
        <StyledBadgeSmallLogo
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                <Avatar src={setLogo} sx={{ width: 50*.50, height: 50*.50 }} />
            }>
            <Avatar src={setImage} sx={{ width: 50, height: 50 }} ></Avatar>
        </StyledBadgeSmallLogo>
    );
}

const AvatarUser: React.FC<AvatarCustomProp> = ({
    size,
    edit,
    hasLogo,
    setImage = "",
    setLogo = "",
}) => {
    if (edit === true) {
        return (GetTypeEdit(size, setImage))
    }
    else if (hasLogo === true) {
        return (GetTypeLogo(size, setImage, setLogo))
    }
    else {
        if (size == "Large") {
            return (
                <Avatar src={setImage} sx={{ width: 225, height: 225 }}></Avatar>
            );
        }
        if (size == "Medium") {
            return (
                <Avatar src={setImage} sx={{ width: 115, height: 115 }}></Avatar>
            );
        }
    }
    return (
        <Avatar src={setImage} sx={{ width: 50, height: 50 }}></Avatar>
    );
}

export default AvatarUser;