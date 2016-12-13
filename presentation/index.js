import React from 'react'

import {
    Appear,
    // BlockQuote,
    // Cite,
    Code,
    CodePane,
    Deck,
    // Fill,
    Heading,
    // Image,
    // Layout,
    Link,
    ListItem,
    List,
    // Markdown,
    // Quote,
    Slide,
    Spectacle,
    Text,
} from 'spectacle'

import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

import SimpleIcon from 'react-simple-icons'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')


const images = {
    city: require('../assets/city.jpg'),
    kat: require('../assets/kat.png'),
    letItSnow: require('../assets/let-it-snow-animated.gif'),
    logo: require('../assets/formidable-logo.svg'),
    markdown: require('../assets/markdown.png'),
}

preloader(images)

// const sansFontFamily = `
// -apple-system, BlinkMacSystemFont,
//     'avenir next', avenir,
//     helvetica, 'helvetica neue',
//     ubuntu,
//     roboto, noto,
//     'segoe ui', arial,
//     sans-serif`

const theme = createTheme({
    primary: '#00c977',
    secondary: '#212c31',
    tertiary: '#f0f0f0',
    quartenary: 'white',
}, {
    primary: 'Open Sans Condensed',
    secondary: 'Lobster Two',
    tertiary: 'monospace',
})


const TitleSlide = (
    <Slide
        transition={['fade']}
        textColor='primary'
        bgImage={images.letItSnow.replace('/', '')}
        bgDarken={0.75}
    >
        <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            {'React S/SSR'}
        </Heading>
        <Heading size={1} fit caps>
            {'Static / Server-Side Rendering'}
        </Heading>
        <Text
            textSize='1.5em'
            textColor='primary'
            margin='20px 0px 0px'
            bold>
            {'React DC, 13 Dec 2016'}
        </Text>
        <Link

            href='https://github.com/homezen/ssr-react-talk'>
            <Text bold caps textColor='tertiary' margin='6em auto 0'>
                {' View Source  '}
                <SimpleIcon name='github' size={48} style={{marginBottom: '-8px'}} />
            </Text>
        </Link>
    </Slide>
)

const AuthorSlide = (
    <Slide transition={['fade']}>
        <Code
            bgColor='secondary'
            textColor='primary'
            textSize='3em'
            padding='0.1em 0.2em'
        >
            {'$ whoami'}
        </Code>
        <Heading size={1} fit caps lineHeight={1.5} textColor='secondary' margin='0.3em 0 0'>
            {'Mike Spainhower ("Spain")'}
        </Heading>
        <Heading size={1} fit caps textColor='tertiary' >
            {'Dev/Cofounder @ homezen'}
        </Heading>
        <Link href='https://www.myhomezen.com'>
            <Text bold caps textColor='tertiary' margin='6em auto'>
                {'myhomezen.com'}
            </Text>
        </Link>
    </Slide>
)

const StaticVsServerOverviewSlide = (
    <Slide transition={[]} align='flex-start'>
        <Appear>
            <Heading size={2} caps textAlign='left' textColor='tertiary'>
                {'Server-side Rendering'}
            </Heading>
        </Appear>
        <Appear>
            <div>
                <List>
                    <Code>{'ReactDOMServer.renderToString()'}</Code>
                    <ListItem bold>{'As if we dumped html from ReactDom.render()'}</ListItem>
                    <ListItem bold>{'Universal/isomorphic'}</ListItem>
                </List>
            </div>
        </Appear>
        <Appear>
            <Heading size={2} caps textAlign='left' textColor='tertiary'>
                {'Static Rendering'}
            </Heading>
        </Appear>
        <Appear>
            <div>
                <List>
                    <Code>{'ReactDOMServer.renderToStaticMarkup()'}</Code>
                    <ListItem bold>{'Raw HTML'}</ListItem>
                    <ListItem bold>{'No React IDs or other "decorations"'}</ListItem>
                    <ListItem bold>{'Analogous to e.g., jade, handlebars'}</ListItem>
                </List>
            </div>
        </Appear>
    </Slide>
)

const RationaleStaticSlide = (
    <Slide transition={[]} bgColor='secondary' textColor='primary'>
        <Heading size={1} fit>
            {'Why Static Rendering?'}
        </Heading>
        <List>
            <ListItem bold>{'Use as/with static site generator'}</ListItem>
            <ListItem bold>{'Templating system for Universal app'}</ListItem>
            <ListItem bold>{'???'}</ListItem>
        </List>
    </Slide>
)

const RationaleServerUniversalSlide = (
    <Slide transition={[]} bgColor='secondary' textColor='primary'>
        <Heading size={1} fit>
            {'Why Universal Apps?'}
        </Heading>
        <List>
            <ListItem bold>{'Perceived (and actual) page load speed'}</ListItem>
            <ListItem bold>{'Search engine optimization'}</ListItem>
            <ListItem bold>{'NOT API replacement'}</ListItem>
        </List>
    </Slide>
)

const StaticOverviewSlide = (
    <Slide transition={[]}>
        <Text bold>
            {"Let's take a look at static rendering for templating"}
        </Text>
    </Slide>
)

const StaticNaiveExampleCodeSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='jsx'
        code={require('!raw!../assets/static-basic.jsx')}
        ranges={[
            {loc: [0, 0], title: 'Basic Static Rendering'},
            {loc: [0, 2], note: 'Import React and renderToStaticMarkup'},
            {loc: [3, 14], note: 'A very simple html page'},
            {loc: [15, 20], note: 'Perform the rendering'},
            {loc: [21, 23], note: 'Just a test, dump to console'},
        ]}
    />
)

const StaticNaiveExampleOutputSlide = (
    <Slide transition={[]}>
        <CodePane
            source='$ npm run demo-static-basic'
            textSize='1em' />
        <CodePane
            source='<html><head><title>Happy Holidays</title></head><body><h1>Happy Holidays</h1><p>Just a test, don&#x27;t stop the party</p></body></html>'
            textSize='1em' />
    </Slide>
)

const HybridOverviewSlide = (
    <Slide transition={[]}>
        <Text bold>
            {'Static apps can also have embedded client-only apps'}
        </Text>

    </Slide>
)

const HybridExampleCodeSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='jsx'
        code={require('!raw!../assets/hybrid-basic.jsx')}
        ranges={[
            {loc: [0, 0], title: 'Basic Static+Client Rendering'},
            {loc: [0, 11], note: 'Same as before'},
            {loc: [11, 12], note: 'Render target for client react app'},
            {loc: [12, 13], note: 'Add client react app script to page'},
            {loc: [25, 37], note: 'Regular `ol react app, renders at target elem`'},
            {loc: [17, 22], note: 'Render & Serve just like before'},
        ]}
    />
)

const HybridMultipleExampleCodeSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const StaticHomezenExampleCodeSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const StaticGenerationResourcesSlide = (
    <Slide transition={[]}>
    </Slide>
)

const UniversalOverviewSlide = (
    <Slide transition={[]}>
    </Slide>
)

const UniversalCompilationPackagingSlide = (
    <Slide transition={[]}>
    </Slide>
)

// TODO running locally
// TODO running in prod

const UniversalNaiveExampleCodeSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const UnivStaticRenderingHtmlDocSlide = (
    <Slide transition={[]}>
    </Slide>
)

const UnivStaticRenderingHtmlDocExampleSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const UnivRoutesNaiveExampleSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const UnivRoutesReactRouterSlide = (
    <Slide transition={[]}>
    </Slide>
)

const UnivRoutesReactRouterExampleSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const UnivDataLoadingOverviewSlide = (
    <Slide transition={[]}>
    </Slide>
)

const UnivDataLoadingHydrationSlide = (
    <Slide transition={[]}>
    </Slide>
)

const UnivDataLoadingHydrationExampleSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const UnivDataLoadingTradeoffsSlide = (
    <Slide transition={[]}>
    </Slide>
)

const UnivDataLoadingNaiveExampleSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const UnivDataLoadingDoubleRenderExampleSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const UnivDataLoadingHocExampleSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const FinalSlide = (
    <Slide transition={['spin', 'slide']} bgColor='tertiary'>
        <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
            {'Happy Holidays'}
        </Heading>
    </Slide>
)

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500}>
                    {TitleSlide}
                    {AuthorSlide}
                    {StaticVsServerOverviewSlide}
                    {RationaleStaticSlide}
                    {RationaleServerUniversalSlide}
                    {StaticOverviewSlide}
                    {StaticNaiveExampleCodeSlide}
                    {StaticNaiveExampleOutputSlide}
                    {HybridOverviewSlide}
                    {HybridExampleCodeSlide}
                    {HybridMultipleExampleCodeSlide}
                    {StaticHomezenExampleCodeSlide}
                    {StaticGenerationResourcesSlide}
                    {UniversalOverviewSlide}
                    {UniversalCompilationPackagingSlide}
                    {UniversalNaiveExampleCodeSlide}
                    {UnivStaticRenderingHtmlDocSlide}
                    {UnivStaticRenderingHtmlDocExampleSlide}
                    {UnivRoutesNaiveExampleSlide}
                    {UnivRoutesReactRouterSlide}
                    {UnivRoutesReactRouterExampleSlide}
                    {UnivDataLoadingOverviewSlide}
                    {UnivDataLoadingHydrationSlide}
                    {UnivDataLoadingHydrationExampleSlide}
                    {UnivDataLoadingTradeoffsSlide}
                    {UnivDataLoadingNaiveExampleSlide}
                    {UnivDataLoadingDoubleRenderExampleSlide}
                    {UnivDataLoadingHocExampleSlide}
                    {FinalSlide}
                </Deck>
            </Spectacle>
        )
    }
}
