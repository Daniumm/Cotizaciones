import React from 'react'
import { CommentsListProps } from './types';
import Comments from 'components/Comments/Comments';
import { Button } from 'components/Button';
import theme from 'theme/theme';
import { ButtonContainer, CommentContainer, MainContainer } from './styles';

const CommentsList: React.FC<CommentsListProps> = ({
    comments
}) => {
    const [showNumComments, setShowNumComments] = React.useState(5);

    const visibleComments = comments.slice(0, showNumComments);

    const showMoreComments = () => {
        setShowNumComments(showNumComments + 5);
    };

    const showLessComments = () => {
        setShowNumComments(2);
    };

    return (
        <MainContainer>
            {visibleComments.map((comment, index) => (

                <CommentContainer key={index}>
                    <Comments
                        name={comment.name}
                        date={comment.date}
                        title={comment.title}
                        text={comment.text}
                    />
                </CommentContainer>
            ))}
            <ButtonContainer>
                {comments.length > 2 && showNumComments < comments.length ? (
                    <Button
                        bgColor={theme.color.navy}
                        color={theme.color.white}
                        firstIcon="Delete"
                        hoverColor={theme.color.black}
                        onClick={() => { showMoreComments() }}
                        size="large"
                    >
                        Mostrar más
                    </Button>
                ) : showNumComments > 2 ? (
                    <Button
                        bgColor={theme.color.navy}
                        color={theme.color.white}
                        firstIcon="Delete"
                        hoverColor={theme.color.black}
                        onClick={() => { showLessComments() }}
                        size="large"
                    >
                        Mostrar menos
                    </Button>
                ) : null}
            </ButtonContainer>
        </MainContainer>
    );
};

export default CommentsList;