import { styled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';

export const StyledBadgeLarge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        backgroundColor: '#011740',
        width: '20%',
        height: '20%',
        borderRadius: '100%',
        '&:hover': {
            backgroundColor: '#255ED1'
        }
    },

}));

export const StyledBadgeMedium = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        backgroundColor: '#011740',
        width: '35%',
        height: '35%',
        borderRadius: '100%',
        '&:hover': {
            backgroundColor: '#255ED1'
        }
    },
}));

export const StyledBadgeSmall = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        backgroundColor: '#011740',
        width: '50%',
        height: '50%',
        borderRadius: '100%',
        TransitionEvent: 'backgroundColor 0.3s ease',
        '&:hover': {
            backgroundColor: '#255ED1'
        }
    },
}));
export const StyledBadgeLargeLogo = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        width: '20%',
        height: '20%',
    },

}));

export const StyledBadgeMediumLogo = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        width: '35%',
        height: '35%',
        borderRadius: '100%',
    },
}));

export const StyledBadgeSmallLogo = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        width: '50%',
        height: '50%',
        borderRadius: '100%',
    },
}));
