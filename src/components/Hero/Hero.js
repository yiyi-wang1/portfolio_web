import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      Yiyi's Portfolio
    </SectionTitle>
    <SectionText>
      I am a passionate full-stack developer.
    </SectionText>
    <Button onClick={() => window.location = "https://github.com/yiyi-wang1/JoinUs"}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;