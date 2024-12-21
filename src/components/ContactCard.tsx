import React from "react";
import styled from "styled-components";
import AccountSvg from "./svgs/AccountSvg";

const ContactCard = ({
  name,
  role,
  profilePic,
  selected,
  onClick,
}: {
  name: string;
  role: string;
  profilePic: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <ContactCardWrapper onClick={onClick}>
      <ContactCardPic>
        {profilePic ? <ProfilePicHolder src={profilePic} /> : <AccountSvg />}
      </ContactCardPic>
      <div style={{ width: "85px" }}>
        <ContactCardName $selected={selected}>{name}</ContactCardName>
        <ContactCardPosition $selected={selected}>{role}</ContactCardPosition>
      </div>
    </ContactCardWrapper>
  );
};

export default ContactCard;

const ContactCardWrapper = styled.div`
  width: 85px;
  margin-right: 28px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    margin-right: 20px;
  }
`;

const ContactCardPic = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 15px;
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const ProfilePicHolder = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const ContactCardName = styled.p<{ $selected: boolean }>`
  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? "600" : "400")};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  margin-bottom: 5px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ContactCardPosition = styled.p<{ $selected: boolean }>`
  font-size: 13px;
  font-weight: ${({ $selected }) => ($selected ? "600" : "400")};
  text-align: center;
  color: ${({ theme }) => theme.colors.lightCardText};
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
