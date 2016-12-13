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
    bundlingDiagram: require('../assets/bundling-diagram.png'),
    homezenLogo: require('../assets/homzen-logo.png'),
    hybridDiagram: require('../assets/hybrid-diagram.png'),
    letItSnow: require('../assets/let-it-snow-animated.gif'),
    localWebpackDiagram: require('../assets/local-webpack.png'),
    snowfallAnimated: require('../assets/snowfall-animated.gif'),
    univServeDiagram: require('../assets/univ-serve-diagram.png'),
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


const UniversalConcernsSlide = (
    <Slide>
        <Heading size={1} fit>
            {'Universal Apps Common Concerns'}
        </Heading>
        <List>
            <ListItem bold>{'Compilation / module system / bundling'}</ListItem>
            <ListItem bold>{'URL routing'}</ListItem>
            <ListItem bold>{'Data loading'}</ListItem>
            <ListItem bold>{'Error handling'}</ListItem>
        </List>
    </Slide>
)


const UniversalBundlingSlide = (
    <Slide>
        <Heading size={1} fit>
            {'Compilation & Bundling'}
        </Heading>
        <List>
            <ListItem bold>{'Separate entry points, same modules'}</ListItem>
            <ListItem bold>{'Browser targeting/optimization'}</ListItem>
            <ListItem bold>{'Node version targeting/optimization'}</ListItem>
            <ListItem bold>{'CSS & assets as importable modules'}</ListItem>
            <ListItem bold>{'Global var for special cases'}</ListItem>
            <Code bold={false} margin='0 0 0 2.5em'>{'if (__IS_SERVER__)'}</Code>
        </List>
    </Slide>
)

const UniversalBundlingDiagramSlide = (
    <Slide>
        <Image src={imageUrls.bundlingDiagram} width='100%' />
    </Slide>
)

const UniversalBundlingResourcesSlide = (
    <Slide bgColor='secondary' textColor='primary'>
        <Heading size={1} fit>
            {'Compilation & Bundling Tools'}
        </Heading>
        <List>
            <ListItem><Link href='https://webpack.github.io/' textColor='primary'>
                {'Webpack'}
            </Link></ListItem>
            <ListItem><Link href='http://browserify.org/' textColor='primary'>
                {'Browserify'}
            </Link></ListItem>
            <ListItem><Link href='http://interlockjs.com/' textColor='primary'>
                {'Interlock.js'}
            </Link></ListItem>
            <ListItem><Link href='http://rollupjs.org/' textColor='primary'>
                {'Rollup'}
            </Link></ListItem>
            <ListItem><Link href='https://github.com/lasso-js/lasso' textColor='primary'>
                {'Lasso'}
            </Link></ListItem>
        </List>
    </Slide>
)

const UniversalRunLocallyWebpackSlide = (
    <Slide>
        <Heading size={1} fit>
            {'Local Development of SSR App (webpack)'}
        </Heading>
        <Image src={imageUrls.localWebpackDiagram} height='100%' />
    </Slide>
)


const UnivRoutingOverviewSlide = (
    <Slide>
        <Heading size={1}>
            {'Universal Routing'}
        </Heading>
        <List>
            <ListItem bold>{'Single definition for URL routes'}</ListItem>
            <ListItem bold>{'Consistent behavior for path & querystring'}</ListItem>
            <ListItem bold>{'Full http router functionality (e.g., path param)'}</ListItem>
        </List>
    </Slide>
)

const UnivRoutingLibrariesSlide = (
    <Slide bgColor='secondary' textColor='primary'>
        <Heading size={1} fit>
            {'Universal React-compat Routers'}
        </Heading>
        <List>
            <ListItem><Link href='https://github.com/ReactTraining/react-router' textColor='primary'>
                {'React Router'}
            </Link></ListItem>
            <ListItem><Link href='https://github.com/kriasoft/universal-router' textColor='primary'>
                {'Universal Router'}
            </Link></ListItem>
            <ListItem><Link href='http://router5.github.io/' textColor='primary'>
                {'router5'}
            </Link></ListItem>
            <ListItem><Link href='https://github.com/STRML/react-router-component' textColor='primary'>
                {'STRML React Router Component'}
            </Link></ListItem>
            <ListItem><Link href='https://github.com/avocode/react-universal-router' textColor='primary'>
                {'Avocode Universal Router'}
            </Link></ListItem>
        </List>
    </Slide>
)

const UnivRoutingReactRouterExampleSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='js'
        code={require('!raw!../assets/react-router-example.jsx')}
        ranges={[
            {loc: [0, 0], title: 'React Router SSR Example'},
            {loc: [2, 11], note: 'Relevant imports'},
            {loc: [11, 21], note: 'Define component and route(s)'},
            {loc: [21, 24], note: 'Get full URL from request'},
            {loc: [24, 27], note: 'Run React Router `match` with routes and URL'},
            {loc: [27, 34], note: 'We receive useful args `error` and `redirectLocation`'},
            {loc: [34, 35], note: 'renderProps encapsulates the router state for the URL'},
            {loc: [35, 39], note: 'A <RouterContext> renders the component tree for a given router state.'},
        ]}
    />
)

const UnivDataLoadingOverviewSlide = (
    <Slide>
        <Heading size={1} fit>
            {'Universal Data Loading'}
        </Heading>
        <List>
            <ListItem bold>{'Remote API data needed to render'}</ListItem>
            <ListItem bold>{'Initial load vs. client action/nav'}</ListItem>
            <ListItem bold>{'Integration with flux/Redux/etc.'}</ListItem>
            <ListItem bold>{'Bonus: intra-datacenter loading is fast'}</ListItem>
        </List>
    </Slide>
)

const UnivDataLoadingBasicAsyncExampleSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='js'
        code={require('!raw!../assets/basic-async-example.jsx')}
        ranges={[
            {loc: [0, 0], title: 'Basic Async Example'},
            {loc: [0, 5], note: 'Normal imports'},
            {loc: [5, 6], note: 'Some API with data we need'},
            {loc: [6, 7], note: 'Helper for templating into the html doc'},
            {loc: [8, 11], note: 'Our familiar App-y App component'},
            {loc: [12, 13], note: 'Generic http handler with async support'},
            {loc: [13, 14], note: 'Assume we load data based off some ID stored in a cookie'},
            {loc: [14, 15], note: 'Make our API call and await the result (we need it to render)'},
            {loc: [15, 18], note: 'We have the data needed to render, so render'},
            {loc: [18, 19], note: 'Add app markup to html doc and send to client'},
        ]}
    />
)

const UnivDataLoadingDoubleRenderSlide = (
    <Slide>
        <Heading size={1} fit>
            {'Decorate component / double render'}
        </Heading>
        <List>
            <ListItem bold>{'Decorate components with async calls'}</ListItem>
            <ListItem bold>{'Perform initial renderToString to invoke'}</ListItem>
            <ListItem bold>{'Use results of async calls to render a 2nd time'}</ListItem>
        </List>
    </Slide>
)

const UnivDataLoadingHydrationSlide = (
    <Slide bgColor='secondary' textColor='primary'>
        <Heading size={1}>
            {'Problem'}
        </Heading>
        <Heading size={1} fit textColor='primary'>
            {'Client rendered DOM must match'}
        </Heading>
        <Appear><div>
            <Heading size={1} margin='1em auto auto'>
                {'Solution'}
            </Heading>
            <Heading size={1} fit textColor='primary'>
                {'"Hydrate" client via JSON in index document'}
            </Heading>
        </div></Appear>
    </Slide>
)

const UnivDataLoadingHydrationExampleSlide = (
    <CodeSlide
        transition={['zoom', 'fade']}
        lang='js'
        code={require('!raw!../assets/basic-hydration-example.jsx')}
        ranges={[
            {loc: [0, 0], title: 'Basic Hydration Example'},
            {loc: [0, 17], note: 'From our async example'},
            {loc: [18, 19], note: 'Serialize the loaded data'},
            {loc: [24, 27], note: 'And place it in an inline script'},
            {loc: [37, 38], note: 'Send to the client'},
            {loc: [42, 52], note: 'In the browser, we can pull it from window'},
        ]}
    />
)


const UnivErrorHandlingOverviewSlide = (
    <Slide>
        <Heading size={1} fit>
            {'Universal Error Handling'}
        </Heading>
        <List>
            <ListItem bold>{'Use error aggregation service (e.g, Rollbar)'}</ListItem>
            <ListItem bold>{'Add to client (via document) and server'}</ListItem>
            <ListItem bold>{'Create universal function for caught errors'}</ListItem>
        </List>
    </Slide>
)

const FinalSlide = (
    <Slide
        transition={['spin', 'slide']}
        bgColor='tertiary'
        textColor='primary'
        bgImage={imageUrls.snowfallAnimated}
        bgDarken={0.6}
    >
        <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
            {'Thanks & Happy Holidays'}
        </Heading>
        <Link href='https://www.github.com/SpainTrain'>
            <Text textColor='tertiary' textSize='2em' margin='0.75em auto'>
                <SimpleIcon size={64} name='github'/>
                {' SpainTrain'}
            </Text>
        </Link>
        <Link href='https://www.twitter.com/spainmtrain'>
            <Text textColor='tertiary' textSize='2em' margin='0.75em auto'>
                <SimpleIcon size={64} name='twitter'/>
                {'@spainmtrain'}
            </Text>
        </Link>
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

                    {UniversalConcernsSlide}

                    {UniversalBundlingSlide}
                    {UniversalBundlingDiagramSlide}
                    {UniversalBundlingResourcesSlide}
                    {UniversalRunLocallyWebpackSlide}

                    {UnivRoutingOverviewSlide}
                    {UnivRoutingLibrariesSlide}
                    {UnivRoutingReactRouterExampleSlide}

                    {UnivDataLoadingOverviewSlide}
                    {UnivDataLoadingBasicAsyncExampleSlide}
                    {UnivDataLoadingDoubleRenderSlide}
                    {UnivDataLoadingHydrationSlide}
                    {UnivDataLoadingHydrationExampleSlide}

                    {UnivErrorHandlingOverviewSlide}

                    {FinalSlide}
                </Deck>
            </Spectacle>
        )
    }
}
