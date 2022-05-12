import React from 'react';
import { DiFirebase, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section nopadding id="tech">
  <SectionDivider />
  <SectionTitle main >Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of technologies in the web development world. 
    From Front-end to Back-end. Followings are my current tech stack, and I'm keeping updating and expending them.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size ="3rem" color ="rgba(5, 53, 120, 0.8)"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          React.js <br/>
          JQuery <br/>
          HTML/CSS <br/>
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size ="3rem" color ="rgba(5, 53, 120, 0.8)"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Node.js <br />
          Ruby on Rails <br/>
          SQL <br/>
          NoSQL <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiJava size ="3rem" color ="rgba(5, 53, 120, 0.8)"/>
      <ListContainer>
        <ListTitle>Languages</ListTitle>
        <ListParagraph>
          Jave <br/>
          JaveScript <br/>
          C <br/>
          C++ <br/>
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
