import {
    mapValues,
} from 'lodash'

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
    Image,
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
    homezenLogo: require('../assets/homzen-logo.png'),
    hybridDiagram: require('../assets/hybrid-diagram.png'),
    univServeDiagram: require('../assets/univ-serve-diagram.png'),
    letItSnow: require('../assets/let-it-snow-animated.gif'),
}

preloader(images)

const imageUrls = mapValues(images, (img) => img.replace('/', ''))

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
        bgImage={imageUrls.letItSnow}
        bgDarken={0.7}
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
            <Text textColor='tertiary' margin='0.3em auto 0'>
                {'homezen/ssr-react-talk'}
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
            <Image src={images.homezenLogo} width={240} margin='4em auto 0' />
            <Text bold caps textColor='tertiary' margin='1em auto'>
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
                    <ListItem bold>{'Includes React DOM attributes'}</ListItem>
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
                    <ListItem bold>{'(Somewhat) analogous to e.g., jade, handlebars'}</ListItem>
                </List>
            </div>
        </Appear>
    </Slide>
)

const RationaleStaticSlide = (
    <Slide
        transition={[]}
        bgColor='secondary'
        textColor='primary'
        notes='Like Jekyll, et al.  Allows aggressive caching (as with any static content).'
    >
        <Heading size={1} fit>
            {'Why Static Rendering?'}
        </Heading>
        <Appear><div>
            <Heading size={2} fit textColor='primary' margin='1em 0 0'>
                {'Efficiently deliver non-interactive content'}
            </Heading>
            <List>
                <ListItem bold>{'Use as/with static site generator'}</ListItem>
                <ListItem bold>{'Templating system for Universal app'}</ListItem>
            </List>
        </div></Appear>
    </Slide>
)

const RationaleServerUniversalSlide = (
    <Slide bgColor='secondary' textColor='primary'>
        <Heading size={1} fit>
            {'Why Universal Apps?'}
        </Heading>
        <Appear><div>
            <Heading size={2} fit textColor='primary' margin='1em 0 0'>
                {'Initialize the page for the client'}
            </Heading>
            <List>
                <ListItem bold>{'Perceived (and actual) page load speed'}</ListItem>
                <ListItem bold>{'Search engine optimization'}</ListItem>
                <ListItem bold>{'NOT API replacement'}</ListItem>
            </List>
        </div></Appear>
    </Slide>
)

const StaticOverviewSlide = (
    <Slide>
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
    <Slide>
        <CodePane
            source='$ npm run demo-static-basic'
            textSize='1em' />
        <CodePane
            source='<html><head><title>Happy Holidays</title></head><body><h1>Happy Holidays</h1><p>Just a test, don&#x27;t stop the party</p></body></html>'
            textSize='1em' />
    </Slide>
)

const HybridOverviewSlide = (
    <Slide>
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
            {loc: [0, 0], title: 'Static + Client Rendering'},
            {loc: [0, 11], note: 'Same as before'},
            {loc: [11, 12], note: 'Render target for client react app'},
            {loc: [12, 13], note: 'Add client react app script to page'},
            {loc: [25, 37], note: 'Regular `ol react app, renders at target elem`'},
            {loc: [17, 22], note: 'Render & Serve just like before'},
        ]}
    />
)

const HybridDiagramSlide = (
    <Slide>
        <Image src={imageUrls.hybridDiagram} width='100%' />
    </Slide>
)

const HybridMultipleExampleCodeSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='jsx'
        code={require('!raw!../assets/hybrid-multiple.jsx')}
        ranges={[
            {loc: [0, 0], title: 'Multi-widget'},
            {loc: [8, 18], note: 'Just add widgets'},
            {loc: [11, 12], note: 'Multiple render targets'},
            {loc: [12, 13], note: 'Multiple render targets'},
            {loc: [13, 14], note: 'Multiple render targets'},
            {loc: [14, 15], note: 'Multiple client source files'},
            {loc: [29, 41], note: 'Multiple client source files'},
            {loc: [15, 16], note: 'Multiple client source files'},
            {loc: [43, 55], note: 'Multiple client source files'},
            {loc: [16, 17], note: 'Multiple client source files'},
            {loc: [57, 69], note: 'Multiple client source files'},
            {loc: [21, 27], note: 'Render & Serve just like before'},
        ]}
    />
)

const StaticHomezenExampleCodeSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='js'
        code={require('!raw!../assets/homezen-static-example')}
        ranges={[
            {loc: [0, 0], title: 'homezen example - legal form'},
            {loc: [5, 7], note: 'basic imports'},
            {loc: [15, 16], note: 'Note: this is an express handler'},
            {loc: [18, 19], note: 'Get props from request JSON body'},
            {loc: [25, 26], note: 'Get component we want to render'},
            {loc: [26, 29], note: 'Render component to string with props'},
            {loc: [31, 32], note: 'Serve'},
        ]}
    />
)

const StaticGenerationResourcesSlide = (
    <Slide bgColor='secondary' textColor='primary'>
        <Heading size={1} fit>
            {'Static Site Generation Resources'}
        </Heading>
        <List>
            <ListItem><Link href='https://phenomic.io/' textColor='primary'>
                {'Penomic'}
            </Link></ListItem>
            <ListItem><Link href='https://github.com/gatsbyjs/gatsby' textColor='primary'>
                {'gatsby'}
            </Link></ListItem>
            <ListItem><Link href='https://github.com/markdalgleish/static-site-generator-webpack-plugin' textColor='primary'>
                {'static site generator webpack plugin'}
            </Link></ListItem>
            <ListItem><Link href='http://jxnblk.com/ejsx/' textColor='primary'>
                {'Ejsx'}
            </Link></ListItem>
            <ListItem><Link href='https://mjml.io/' textColor='primary'>
                {'MJML (Email)'}
            </Link></ListItem>
        </List>
    </Slide>
)

const UniversalOverviewSlide = (
    <Slide>
        <Heading size={1}>
            {'Universal Apps'}
        </Heading>
        <List>
            <ListItem bold>{'Server & client render same area of page'}</ListItem>
            <ListItem bold>{'Server initializes page with React DOM attributes'}</ListItem>
            <ListItem bold>{'Client diffs and attaches event listeners'}</ListItem>
        </List>
    </Slide>
)

const UniversalOverviewDiagramSlide = (
    <Slide>
        <Image src={imageUrls.univServeDiagram} width='100%'/>
    </Slide>
)

const UniversalBasicCodeSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='js'
        code={require('!raw!../assets/univ-basic.jsx')}
        ranges={[
            {loc: [0, 0], title: 'Basic universal app'},
            {loc: [0, 6], note: 'Universal (shared) component'},
            {loc: [9, 14], note: 'Server imports renderToString'},
            {loc: [15, 20], note: 'Render component to decorated string'},
            {loc: [21, 34], note: 'Here is the html document'},
            {loc: [27, 30], note: 'Place the server rendered app into the target div'},
            {loc: [30, 31], note: 'Include the client bundle of the same app'},
            {loc: [39, 48], note: 'Include the client bundle of the same app'},
            {loc: [35, 36], note: 'Just testing, print to console'},
        ]}
    />
)

const UniversalBasicOutputSlide = (
    <Slide>
        <CodePane
            source='$ npm run demo-univ-basic'
            textSize='1em' />
        <CodePane
            lang='markup'
            source={
`<html>
  <head>
    <title>Holiday App</title>
  </head>
  <body>
    <div id='react-target'>
      <div data-reactroot="" data-reactid="1" data-react-checksum="1998851930"></div>
    </div>
    <script async src='./client.js' />
  </body>
</html>`
            }
            textSize='1em' />
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
                    {HybridDiagramSlide}
                    {HybridMultipleExampleCodeSlide}
                    {StaticHomezenExampleCodeSlide}
                    {StaticGenerationResourcesSlide}

                    {UniversalOverviewSlide}
                    {UniversalOverviewDiagramSlide}
                    {UniversalBasicCodeSlide}
                    {UniversalBasicOutputSlide}

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
