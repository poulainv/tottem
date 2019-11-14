import { Box, Heading } from 'grommet'
import { MailOption } from 'grommet-icons'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import * as React from 'react'
import ReactGA from 'react-ga'
import { initReactI18next, Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
    LargeResponsiveArtwork,
    MobileArtwork,
} from '../components/atoms/Illustration'
import Logo from '../components/atoms/Logo'
import {
    LargeAndUp,
    MediumAndUp,
    SmallAndDown,
} from '../components/atoms/ResponsiveStyledComponent'
import Separator from '../components/atoms/Separator'
import { accent500, accent900, brand500 } from '../constants/colors'

const Header = styled(Heading)`
    font-size: 40px;
    line-height: 1.3;
    font-weight: 700;
    max-width: 550px;
    margin: 25px 0px 25px 0px;
    font-family: 'Poiret One', Arial, sans-serif;
    width: 100%;

    @media screen and (max-width: 812px) {
        font-size: 26px;
        line-height: 36px;
        text-align: center;
    }
`

const SubHeader = styled.p`
    font-size: 18px;
    line-height: 28px;
    margin: 8px 0px 8px 0px;
    font-weight: 400;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    @media screen and (max-width: 812px) {
        font-size: 16px;
        line-height: 22px;
        text-align: center;
    }
    strong {
        font-weight: 700;
    }
`

const CTAButton = styled.a`
    background-color: ${accent500};
    color: white;
    padding: 20px 40px 20px 40px;
    border-radius: 40px;
    text-decoration: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 18px;
    width: max-content;
    font-weight: 600;
    @media screen and (max-width: 812px) {
        font-size: 16px;
        padding: 15px 30px 15px 30px;
    }

    :hover {
        background-color: ${accent900};
    }
`

const LandingLeftPanel = styled(Box)`
    width: 700px;
    margin-top: 0px;
    @media screen and (max-width: 812px) {
        height: 100%;
        align-items: center;
        margin-top: 0;
    }
`

const handleCTA = () => {
    ReactGA.initialize('UA-149517534-1')
    ReactGA.event({
        category: 'Signup',
        action: 'Click on keepme',
    })
}

const Lang = styled.div`
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
    :hover {
        cursor: pointer;
    }
`

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        react: {
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em'],
        },
        resources: {
            en: {
                translation: {
                    punchline: 'The knowledge platform for community',
                    desc1:
                        'Internet was built to support <strong> knowledge sharing. </strong>',
                    desc2:
                        'However, with the massive usage of AI recommendation systems <strong> we feel overwhelmed with poor and clickbait content. </strong>',
                    desc3:
                        '<em> Relevant content is getting hard to find? </em>',
                    desc4:
                        'Tottem is a human centered platform where enthusiastic people and organizations create <strong> relevant collections of hand-picked items. </strong>',
                    button: 'Keep me in the loop',
                },
            },
            fr: {
                translation: {
                    punchline:
                        'Des recommandations culturelles, garanties sans IA',
                    desc1:
                        'Internet a été construit pour faciliter <strong>l’essor du savoir.</strong>',
                    desc2:
                        'Pourtant, l’utilisation massive des algorithmes de recommandation <strong> nous submerge de pièges à clics</strong>... exploitant nos petits faibles pour les vidéos de chat !',
                    desc3:
                        '<em> Difficile de trouver du contenu pertinent ? </em>',
                    desc4:
                        'Tottem est une plateforme où des passionnés rassemblent des contenus culturels, offrant <strong> un panorama d’idées et de nouvelles perspectives. </strong>',
                    button: "Je veux m'inscrire pour la beta",
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

const Landing: React.FC = props => {
    useEffect(() => {
        const redirectTo = localStorage.getItem('redirectTo')
        if (redirectTo) {
            // If user is logging in or out, we redirect him to the page he was on
            window.location.href = redirectTo
            localStorage.removeItem('redirectTo')
        }
    }, [])

    const { t } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    React.useEffect(() => {
        ReactGA.initialize('UA-149517534-1', {
            testMode: process.env.NODE_ENV === 'test',
        })
        ReactGA.pageview(window.location.pathname + window.location.search)
    })

    return (
        <Box align="center" background="white">
            <NextSeo title="Tottem" />
            <Box
                direction="row"
                justify="between"
                align="center"
                height="xsmall"
                fill="horizontal"
            >
                <Box margin={{ horizontal: 'large' }}>
                    <Logo>Tottem</Logo>
                </Box>
                <Box
                    margin={{ horizontal: 'large' }}
                    direction="row"
                    gap="medium"
                >
                    <Lang onClick={() => changeLanguage('en')}>EN</Lang>
                    <Lang onClick={() => changeLanguage('fr')}>FR</Lang>
                    <a href="mailto:hello@tottem.app">
                        <MailOption />
                    </a>
                </Box>
            </Box>

            <Box direction="row-responsive" justify="between">
                <LandingLeftPanel
                    pad={{ horizontal: 'large' }}
                    justify="around"
                >
                    <Header level={2}>{t('punchline')}</Header>
                    <SmallAndDown>
                        <MobileArtwork />
                    </SmallAndDown>
                    <LargeAndUp>
                        <Box margin={{ vertical: 'medium' }}>
                            <Separator color={brand500} />
                        </Box>
                    </LargeAndUp>
                    <SubHeader>
                        <Trans i18nKey="desc1" />
                        <br />
                        <br />
                        <Trans i18nKey="desc2" />
                        <br /> <br />
                        <Trans i18nKey="desc3" />
                        <br /> <br />
                        <Trans i18nKey="desc4" />
                    </SubHeader>
                    <CTAButton
                        href="http://eepurl.com/gE44Sz"
                        onClick={handleCTA}
                        style={{
                            marginTop: '24px',
                            marginBottom: '40px',
                        }}
                    >
                        {t('button')}
                    </CTAButton>
                </LandingLeftPanel>
                <MediumAndUp>
                    <LargeResponsiveArtwork />
                </MediumAndUp>
            </Box>
        </Box>
    )
}

export default Landing
