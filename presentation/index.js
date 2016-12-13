import React from 'react'

import {
    Appear,
    BlockQuote,
    Cite,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text,
} from 'spectacle'

import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'
import Interactive from '../assets/interactive'

import SimpleIcon from 'react-simple-icons'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')


const images = {
    city: require('../assets/city.jpg'),
    kat: require('../assets/kat.png'),
    logo: require('../assets/formidable-logo.svg'),
    markdown: require('../assets/markdown.png'),
}

preloader(images)

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
    <Slide transition={[]} bgColor='primary' textColor='secondary'>
        <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            {'React SS/SSR'}
        </Heading>
        <Heading size={1} fit caps>
            {'Static Site / Server-Side Rendering'}
        </Heading>
        <Text
            textSize='1.5em'
            textColor='secondary'
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
    <Slide transition={[]}>
        <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            {'Mike Spainhower ("Spain")'}
        </Heading>
        <Heading size={1} fit caps>
            {'homezen'}
        </Heading>
        <Text
            textSize='1.5em'
            textColor='secondary'
            margin='20px 0px 0px'
            bold>
            {'blah'}
        </Text>
        <Link

            href='https://github.com/homezen/ssr-react-talk'>
            <Text bold caps textColor='tertiary' margin='6em auto'>
                {' homezen  '}
            </Text>
        </Link>
    </Slide>
)

const StaticVsServerOverviewSlide = (
    <Slide transition={[]}>
        <Heading size={1} fit caps>
            {'Server-side Rendering'}
        </Heading>
        <Markdown>
            {`
\`ReactDOMServer.renderToString()\`

* As if we dumped html from ReactDom.render()
* Intended to be "picked up" by client
            `}
        </Markdown>
        <Heading size={1} fit caps>
            {'Static Rendering'}
        </Heading>
        <Markdown>
            {`
\`ReactDOMServer.renderToStaticMarkup()\`

* Raw HTML
* No React IDs or other "decorations"
* Analogous to templating systems (jade, handlebars)
            `}
        </Markdown>
    </Slide>
)

const RationaleStaticSlide = (
    <Slide transition={[]}>
    </Slide>
)

const RationaleServerUniversalSlide = (
    <Slide transition={[]}>
    </Slide>
)

const StaticOverviewSlide = (
    <Slide transition={[]}>
    </Slide>
)

const StaticNaiveExampleCodeSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='jsx'
        code={require('raw!../assets/deck.example')}
        ranges={[
            {loc: [0, 0], title: 'Here is some code'},
            {loc: [1, 5]},
            {loc: [5, 11], note: 'here we are'},
        ]}
    />
)

const HybridOverviewSlide = (
    <Slide transition={[]}>
    </Slide>
)

const HybridExampleCodeSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const HybridMultipleExampleCodeSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const HybridProjectsResourcesSlide = (
    <Slide transition={[]}>
    </Slide>
)

const ServerOnlyNaiveExampleCodeSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
)

const ServerOnlyHomezenExampleCodeSlide = (
    <CodeSlide transition={[]}>
    </CodeSlide>
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
// TODO running in production

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
                    {HybridOverviewSlide}
                    {HybridExampleCodeSlide}
                    {HybridMultipleExampleCodeSlide}
                    {HybridProjectsResourcesSlide}
                    {ServerOnlyNaiveExampleCodeSlide}
                    {ServerOnlyHomezenExampleCodeSlide}
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
