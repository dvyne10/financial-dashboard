import React from "react";
import styled from "styled-components";
import AccountSvg from "./svgs/AccountSvg";

const ContactCard = ({
  name,
  role,
  profilePic,
  selected,
}: {
  name: string;
  role: string;
  profilePic: string;
  selected: boolean;
}) => {
  return (
    <ContactCardWrapper>
      <ContactCardPic>
        {profilePic ? <ProfilePicHolder src={profilePic} /> : <AccountSvg />}
      </ContactCardPic>
      <ContactCardName $selected={selected}>{name}</ContactCardName>
      <ContactCardPosition $selected={selected}>{role}</ContactCardPosition>
    </ContactCardWrapper>
  );
};

export default ContactCard;

const ContactCardWrapper = styled.div`
  width: 85px;
  height: 127px;
`;

const ContactCardPic = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const ProfilePicHolder = styled.img``;

const ContactCardName = styled.p<{ $selected: boolean }>`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactCardPosition = styled.p<{ $selected: boolean }>`
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
