import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel: 778-892-5857'>778-892-5857</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto: eewang1145@gmail.com'>eewang1145@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Test</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com/yiyi-wang1">
            <AiFillGithub size = "3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href = "https://www.linkedin.com/in/eewang1145/">
            <AiFillLinkedin size = "3rem"></AiFillLinkedin>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
