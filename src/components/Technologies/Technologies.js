import React from 'react';
import { DiFirebase, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section nopadding id="tech">
  <SectionDivider />
  <SectionTitle main >Technologies</SectionTitle>
  <SectionText>
    TODO: tech list
  </SectionText>
  <List>
    <ListItem>
      <DiReact size ="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          React.js <br/>

        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size ="3rem"/>
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
      <DiJava size ="3rem"/>
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
