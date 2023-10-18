import {
  Section,
  Container,
  Title,
  MainBlock,
  OneMilBlock,
  Text,
  TitleH3,
  SadGirlPhoto,
  Block5mil,
  PeopleOnBoard,
  ManWithBagPhoto,
  YearsBlock,
  ProjectsBlock,
  GirlInStylePhoto,
  AwardsBlock,
  VisitsBlock,
  GirlWithWordsPhoto,
  QuestionText,
} from './OurClients.styled';
import sadgirl from './img/sadgirl.png';
import sadgirl2x from './img/sadgirl2x.png';
import manwithbag from './img/manwithbag.jpg';
import manwithbag2x from './img/manwithbag2x.jpg';
import girlinstyle from './img/styledgirl.jpg';
import girlinstyle2x from './img/styledgirl2x.jpg';
import girlwithwords from './img/girlwithwords.jpg';
import girlwithwords2x from './img/girlwithwords2x.jpg';
import { useContext } from "react";
import { LanguageContext } from "components/HookLang/LanguageContext";
import { useTranslation } from 'react-i18next';

export const OurClients = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const isRetina = window.devicePixelRatio > 1.1;
  const sadGirlPhoto = isRetina ? sadgirl2x : sadgirl;
  const manWithBagPhoto = isRetina ? manwithbag2x : manwithbag;
  const girlIntylePhoto = isRetina ? girlinstyle2x : girlinstyle;
  const girlWithWordsPhoto = isRetina ? girlwithwords2x : girlwithwords;
  return (
    <Section id="ourclients">
      <Container>
        <Title>{t('our-clients-title')}</Title>
        <MainBlock>
          <OneMilBlock className={currentLanguage === 'en' ? '' : 'uk-awards-1mil'}>
            <Text>{t('our-clients-text-1')}</Text>
            <TitleH3>1M</TitleH3>
            <SadGirlPhoto
              loading="lazy"
              src={sadGirlPhoto}
              alt="sad girl"
            ></SadGirlPhoto>
          </OneMilBlock>
          <Block5mil className={currentLanguage === 'en' ? '' : 'uk-awards-5mil'}>
            <Text className={currentLanguage === 'en' ? '' : 'uk-awards-5mil-text'}>{t('our-clients-text-2')}</Text>
            <TitleH3>$50M</TitleH3>
          </Block5mil>
          <PeopleOnBoard>
            <Text>{t('our-clients-text-3')}</Text>
            <TitleH3>60+</TitleH3>
          </PeopleOnBoard>
          <ManWithBagPhoto
            src={manWithBagPhoto}
            loading="lazy"
            alt="man with bag"
          ></ManWithBagPhoto>
          <YearsBlock>
            <Text>{t('our-cliects-text-4')}</Text>
            <TitleH3>7</TitleH3>
          </YearsBlock>
          <ProjectsBlock>
            <Text>{t('our-cliects-text-5')}</Text>
            <TitleH3>500+</TitleH3>
          </ProjectsBlock>
          <GirlInStylePhoto
            src={girlIntylePhoto}
            loading="lazy"
            alt="styled girl"
          ></GirlInStylePhoto>
          <AwardsBlock className={currentLanguage === 'en' ? '' : 'uk-awards-block'}>
            <Text>{t('our-clients-text-7')}</Text>
            <TitleH3>80+</TitleH3>
          </AwardsBlock>
          <VisitsBlock className={currentLanguage === 'en' ? '' : 'uk-visits-block'}>
            <Text>{t('our-clients-text-8')}</Text>
            <TitleH3>25M</TitleH3>
          </VisitsBlock>
          <GirlWithWordsPhoto
            src={girlWithWordsPhoto}
            loading="lazy"
            alt="girl with pink words"
          ></GirlWithWordsPhoto>
          <QuestionText className={currentLanguage === 'ua' ? 'uk-question-text' : ''} >{t('our-cliectc-text-6')}</QuestionText>
        </MainBlock>
      </Container>
    </Section>
  );
};
