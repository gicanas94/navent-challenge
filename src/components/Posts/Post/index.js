import { BackInTime as BackInTimeIcon } from 'styled-icons/entypo';
import { Heart as EmptyHeartIcon } from 'styled-icons/ionicons-outline';
import { Heart as FilledHeartIcon } from 'styled-icons/ionicons-sharp';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'proptypes';
import React, { useState } from 'react';
import styled from 'styled-components';

import * as CONSTANTS from '../../../constants';
import Button from '../../Button';
import ContactForm from '../../../forms/Contact';
import Modal from '../../Modal';
import { formatNumberToCurrency } from '../../../utils';
import { transitions } from '../../../styles';

const StyledWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #dddddd;
  box-shadow: 0 4px 17px -5px #a5a5a5;
  display: flex;
  overflow: hidden;

  ${({ postPlan }) =>
    postPlan === CONSTANTS.POST_PLAN.HIGHLIGHTED.ID &&
    `
    border-top: 4px solid #43cd43;
  `}

  ${({ postPlan }) =>
    postPlan === CONSTANTS.POST_PLAN.SUPERHIGHLIGHTED.ID &&
    `
    border-top: 4px solid #b344ff;
  `}
`;

const StyledLeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 35%;
`;

const StyledRightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 65%;
`;

const StyledPlanBubble = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 7px 2px rgba(0, 0, 0, 0.6);
  font-size: 0.7em;
  font-weight: bold;
  left: 15px;
  padding: 7px;
  position: absolute;
  top: 15px;
`;

const StyledHeartIconBubble = styled.div`
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 7px 2px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  padding: 3px 4px;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: transform ${transitions.speed.superfast} linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const StyledEmptyHeartIcon = styled(EmptyHeartIcon)`
  cursor: pointer;
  height: 25px;
  margin-top: 2px;
  width: 25px;
`;

const StyledFilledHeartIcon = styled(FilledHeartIcon)`
  color: #ff4b4b;
  height: 25px;
  margin-top: 2px;
  width: 25px;
`;

const StyledPicture = styled.img`
  max-height: 220px;
  user-select: none;
  width: 100%;
`;

const StyledPricesWrapper = styled.div`
  padding: 15px;
`;

const StyledPrice = styled.span`
  display: block;
  font-size: 1.7em;
  font-weight: bold;
`;

const StyledExpenses = styled.span`
  color: #929292;
  display: block;
  font-size: 0.8em;
  margin-top: 6px;
`;

const StyledHr = styled.hr`
  bottom: 7px;
  height: 50px;
  position: absolute;
  right: 0;
  width: 1px;
`;

const StyledTitleAndLocationWrapper = styled.div``;

const StyledTitle = styled(Link)``;

const StyledLocation = styled.p`
  margin-top: 6px;
  font-size: 0.8em;
`;

const StyledDescription = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  color: #929292;
  display: -webkit-box;
  font-size: 0.8em;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledPublishedAgoAndContactButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledPublishedAgoWrapper = styled.div``;

const StyledBackInTimeIcon = styled(BackInTimeIcon)`
  height: 25px;
  margin-bottom: 1px;
  margin-right: 7px;
  width: 25px;
`;

const StyledPublishedAgo = styled.span`
  font-size: 0.8em;
  font-weight: bold;
`;

const Post = ({ favorite, heartIconClickHandler, post }) => {
  const splittedPublishDate = post.publish_date.split('/');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <StyledWrapper postPlan={post.plan}>
      <StyledLeftSideWrapper>
        {post.plan === CONSTANTS.POST_PLAN.HIGHLIGHTED.ID && (
          <StyledPlanBubble>
            {CONSTANTS.POST_PLAN.HIGHLIGHTED.LABEL}
          </StyledPlanBubble>
        )}

        {post.plan === CONSTANTS.POST_PLAN.SUPERHIGHLIGHTED.ID && (
          <StyledPlanBubble>
            {CONSTANTS.POST_PLAN.SUPERHIGHLIGHTED.LABEL}
          </StyledPlanBubble>
        )}

        <StyledHeartIconBubble onClick={() => heartIconClickHandler(post.id)}>
          {favorite ? <StyledFilledHeartIcon /> : <StyledEmptyHeartIcon />}
        </StyledHeartIconBubble>

        <StyledPicture alt="Foto de la publicación" src={post.picture} />

        <StyledPricesWrapper>
          <StyledPrice>
            {formatNumberToCurrency(
              post.prices[0].price.amount,
              post.prices[0].price.currency,
            )}
          </StyledPrice>

          <StyledExpenses>
            {post.prices[0].expenses
              ? `+ ${formatNumberToCurrency(
                  post.prices[0].expenses.amount,
                  post.prices[0].expenses.currency,
                )} de expensas`
              : 'sin expensas'}
          </StyledExpenses>
        </StyledPricesWrapper>

        <StyledHr />
      </StyledLeftSideWrapper>

      <StyledRightSideWrapper>
        <StyledTitleAndLocationWrapper>
          <StyledTitle to={post.slug}>{post.title}</StyledTitle>

          <StyledLocation>
            {`${post.location.address},
            ${post.location.zone},
            ${post.location.city}`}
          </StyledLocation>
        </StyledTitleAndLocationWrapper>

        <StyledDescription>{post.description}</StyledDescription>

        <StyledPublishedAgoAndContactButtonWrapper>
          <StyledPublishedAgoWrapper>
            <StyledBackInTimeIcon />

            <StyledPublishedAgo>
              {`Publicado ${moment([
                splittedPublishDate[2],
                splittedPublishDate[1] - 1,
                splittedPublishDate[0],
              ]).fromNow()}`}
            </StyledPublishedAgo>
          </StyledPublishedAgoWrapper>

          <Button color="#e14100" onClick={() => setModalIsOpen(true)}>
            Contactar
          </Button>
        </StyledPublishedAgoAndContactButtonWrapper>
      </StyledRightSideWrapper>

      {modalIsOpen && (
        <Modal closeModalHandler={() => setModalIsOpen(false)} width="350px">
          <ContactForm closeModalHandler={() => setModalIsOpen(false)} />
        </Modal>
      )}
    </StyledWrapper>
  );
};

Post.propTypes = {
  favorite: PropTypes.bool.isRequired,
  heartIconClickHandler: PropTypes.func.isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Post;
