// Import React
import React from "react";
import Color from "color";

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide,
  Text, Layout, Fill, Fit, Image, Code, Appear, Link, CodePane, Table,
  TableHeader, TableHeaderItem, TableItem, TableRow, TableBody, S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from 'spectacle-code-slide';
import CodeRunner from '../assets/components/code-runner';
import RawHtml from '../assets/components/raw-html';

// Require CSS
require("normalize.css");
require("../assets/styles/nice-scrollbar.css");
require("../assets/styles/presentation.css");
require("animate.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  resultStackLogo: require("../assets/rs-banner-transparent.png"),
  fatArrowMan: require("../assets/fat-arrow-man.jpg"),
  actuallyMan: require("../assets/actually-man.png"),
  typescriptLogo: require("../assets/typescript-logo.svg"),
  mindBlown: require("file-loader!../assets/mind-blown.mp4"),
  abeLincoln: require("../assets/abe-lincoln.png"),
  selfie: require("../assets/professor-with-stars.jpg"),
  selfieTweet: require("../assets/selfie-tweet.png"),
  destructuring: {
    extraPropError: require("../assets/extra-property-error.png"),
    objectSpread: require("../assets/object-destructuring-spread.png")
  },
  typeGuard: {
    first: require("../assets/type-guard.0.png"),
    second: require("../assets/type-guard.1.png"),
    third: require("../assets/type-guard.2.png")
  }
};

const data = {
  users: require("../assets/snippets/sample-data.json")
};

preloader(images);

const colors = {
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  codebg: "#2d2d2d",
  red: "#CC0D0A",
  yellow: '#F5B700'
};

const darkenBy = 0.5;

colors.primaryDark = Color(colors.primary).darken(darkenBy);
colors.secondaryDark = Color(colors.secondary).darken(darkenBy);
colors.tertiaryDark = Color(colors.tertiary).darken(darkenBy);
colors.quartenaryDark = Color(colors.quartenary).darken(darkenBy);

const styles = {
  strikethrough: { textDecoration: 'line-through', opacity: '0.5' },
  keyword: {
    textShadow: '1px 1px 1px #000',
    color: colors.yellow,
    textTransform: 'uppercase'
  },
  code: {
    textAlign: 'left',
    fontSize: '2rem'
  },
  codeSm: {
    textAlign: 'left',
    fontSize: '1.75rem',
    marginLeft: '10px',
    marginRight: '10px'
  },
  shadow: {
    textShadow: '#03A9FC 0px 0px 1px'
  }
};

const theme = createTheme(colors, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} margin="0px auto 40px" textColor="secondary">
            Unlocking JavaScript
          </Heading>
          <Heading size={4} caps lineHeight={1} margin="0px auto 40px" textColor="secondary">
            via
          </Heading>
          <Image src={images.typescriptLogo} margin="0px auto 40px" height="150px" />
          <Layout>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                Josh Carroll
              </Text>
            </Fill>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                @jwcarroll
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.resultStackLogo.replace("/", "")} margin="0px auto 40px" />
          <Appear>
            <div style={{ marginBottom: "40px" }}>
              <RawHtml html={require("raw-loader!../assets/snippets/rs-capabilities.html")}></RawHtml>
            </div>
          </Appear>
          <Appear>
            <div>
              <Layout>
                <Fill>
                  <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                    Josh Carroll
                </Text>
                </Fill>
                <Fill>
                  <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                    Director of Consulting
                </Text>
                </Fill>
              </Layout>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What is TypeScript?
          </Heading>
          <Appear>
            <Text margin="40px 0 0" size={1} bold>
              TypeScript is a <span style={styles.keyword}>typed superset</span> of JavaScript
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} bold>
              That <span style={styles.keyword}>compiles</span> to plain JavaScript.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" fit textColor="primary">What does that look like?</Heading>
          <Appear>
            <Text margin="0 0 20px" size={1} bold textColor="quartenary">
              &#x3C;expression&#x3E;: &#x3C;type&#x3E;
            </Text>
          </Appear>
          <Layout style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("typescript/simple-types.sample")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("typescript/simple-types.1.sample")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">Basic Types</Heading>
          <Layout style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("typescript/basic-types.sample")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("typescript/basic-types.1.sample")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">Array Types</Heading>
          <Layout style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("typescript/array-types.sample")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("typescript/array-types.1.sample")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" fit textColor="primary">Function Parameter Types</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <div style={styles.code}>
              <RawHtml html={require("raw-loader!../app/typescript/function-parameter-types.html")}></RawHtml>
            </div>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" fit textColor="primary">Structural Equivalence</Heading>
          <Layout style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("typescript/interfaces.sample")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" fit textColor="primary">Structural Equivalence</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <div style={styles.code}>
              <RawHtml html={require("raw-loader!../app/typescript/interfaces.1.html")}></RawHtml>
            </div>
          </Layout>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("typescript/generic-types.sample")}
          ranges={[
            { loc: [0, 0], title: "Generic Types" },
            { loc: [0, 2], note: "Type alias describes our callback function" },
            { loc: [3, 10], note: "Generic type parameters" },
            { loc: [11, 12], note: "Array<number>" },
            { loc: [13, 22], note: "Full strong typing all the way through" },
            { loc: [17, 20], note: "Template strings" }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.abeLincoln} bgDarken={0.6}>
          <BlockQuote>
            <Quote>Template string are pretty dope!</Quote>
            <Cite>Abraham Lincoln</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            How Do I TypeScript?
          </Heading>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              You probably <span style={styles.keyword}>already</span> are.
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              All valid <span style={styles.keyword}>JavaScript</span>.
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              Is valid <span style={styles.keyword}>TypeScript</span>!
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" fit textColor="primary">Using The TypeScript Compiler</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <div style={styles.code}>
              <CodePane textSize="44px" lang="bash" source={snippet("typescript/tsc.sample")}></CodePane>
            </div>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            <code>tsc</code> demo
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Is That It?
          </Heading>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              No, but the <span style={styles.keyword}>types</span> in TypeScript...
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              Are not the most <span style={styles.keyword}>compelling</span> part.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Types in TypeScript
          </Heading>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              Are really very <span style={styles.keyword}>useful</span>
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              But not terribly <span style={styles.keyword}>exciting</span>
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              They are like your <span style={styles.keyword}>accountant</span>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Text margin="40px 0 0" size={1} fit bold>
            What is really <span style={styles.keyword}>exciting</span>
          </Text>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              Is TypeScript <span style={styles.keyword}>unlocks</span> JavaScript
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} bold>
              You get the <span style={styles.keyword}>best features</span> without having to wait for them to be <span style={styles.keyword}>implemented</span>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="tertiary">ESNext Goodies</Heading>
          <Layout style={{ justifyContent: "space-around" }}>
            <List>
              <ListItem>class Keyword</ListItem>
              <ListItem>Arrow Functions</ListItem>
              <ListItem>const / let</ListItem>
              <ListItem>Rest / Spread</ListItem>
            </List>
            <List>
              <ListItem>Destructuring</ListItem>
              <ListItem>async / await</ListItem>
              <ListItem>Generators</ListItem>
              <ListItem>Poxies</ListItem>
              <ListItem>Decorators</ListItem>
            </List>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Classes
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">Simple Class</Heading>
          <Layout style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("classes/simple-class.sample")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("classes/simple-class.compiled.sample")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Const and Let
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("let/the-problem.ts")}
          ranges={[
            { loc: [0, 8], title: "The Problem" },
            { loc: [2, 3], title: "var misbehaves!" },
            { loc: [3, 6], note: "Seems legit." },
            { loc: [3, 6], note: <CodeRunner systemImport={importTs("let/the-problem.ts")}></CodeRunner> },
            { loc: [2, 7], note: "Function scoped, rather than block scoped." }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} margin="0px auto 20px" textColor="tertiary" fit>Function Scope and Hoisting</Heading>
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="24px" lang="typescript" source={snippet("let/the-problem.ts")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Heading size={3} textColor="tertiary">=></Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane textSize="24px" lang="typescript" source={snippet("let/the-problem.hoisted.ts")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("let/the-problem.fixed-with-closures.ts")}
          ranges={[
            { loc: [0, 0], title: "Fixing With Closures" },
            { loc: [3, 8], note: "Create new scope for each call" },
            { loc: [3, 8], note: <CodeRunner systemImport={importTs("let/the-problem.fixed-with-closures.ts")}></CodeRunner> },
            { loc: [3, 8], title: "Ugly!" }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("let/using-let.ts")}
          ranges={[
            { loc: [2, 7], title: <span><code>let</code> To The Rescue!</span> },
            { loc: [2, 3], note: "Replace var with let" },
            { loc: [2, 7], note: <span><code>let</code> is block scoped</span> },
            { loc: [2, 7], note: <CodeRunner systemImport={importTs("let/using-let.ts")}></CodeRunner> },
            { loc: [2, 7], title: "No More Uglies!" }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("const/the-problem.ts")}
          ranges={[
            { loc: [0, 0], title: "The Reassignment Problem" },
            { loc: [2, 3], note: "Create an object" },
            { loc: [6, 7], note: "Do some stuff" },
            { loc: [4, 9] },
            { loc: [4, 9], note: <CodeRunner systemImport={importTs("const/the-problem.ts")}></CodeRunner> },
            { loc: [6, 7], title: "WTF?!? doStuff()" },
            { loc: [22, 27], note: "Let's see what's going on..." },
            { loc: [42, 52] },
            { loc: [42, 52], title: "FML!" }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" textColor="primary">Using Const</Heading>
          <Layout style={{ justifyContent: "center" }}>
            <div style={styles.code}>
              <RawHtml html={require("raw-loader!../app/const/using-const.html")}></RawHtml>
            </div>
          </Layout>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("const/not-immutable.ts")}
          ranges={[
            { loc: [0, 0], title: "Const != Immutable" },
            { loc: [2, 3] },
            { loc: [6, 7], note: "Object is still mutable" },
            { loc: [4, 9] },
            { loc: [4, 9], note: <CodeRunner systemImport={importTs("const/not-immutable.ts")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.fatArrowMan} bgDarken={0.6}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary" style={styles.shadow}>
            Fat Arrows
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            What are arrow functions?
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>Arrow functions are <span style={styles.keyword}>function expressions</span></Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>With a <span style={styles.keyword}>shorter syntax</span></Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>and a<span style={styles.keyword}>lexically bound</span> 'this' keyword</Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" fit textColor="primary">What Are Fat Arrows?</Heading>
          <Layout style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("fat-arrows/standard-functions.ts")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("fat-arrows/standard-functions-as-fat-arrows.ts")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="codebg">
          <Heading size={1} margin="0px auto 40px" fit textColor="primary">What Are Fat Arrows? (cont.)</Heading>
          <Layout style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("fat-arrows/standard-functions.promises.ts")}></CodePane>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane textSize="28px" lang="typescript" source={snippet("fat-arrows/standard-functions-as-fat-arrows.promises.ts")}></CodePane>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("fat-arrows/syntax.ts")}
          ranges={[
            { loc: [0, 0], title: "Syntax" },
            { loc: [2, 9], note: "Single params can omit parens" },
            { loc: [6, 7], note: "Unless you add type information" },
            { loc: [10, 15], note: "Simple value implicit return" },
            { loc: [16, 19], note: "Wrap new object in parens" }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} margin="0px 0 40px" fit caps lineHeight={1} textColor="primary">
            Lexical 'this' keyword
          </Heading>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>With normal functions the <span style={styles.keyword}>this</span> keyword</Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>Is <span style={styles.keyword}>not</span> bound based on <span style={styles.keyword}>where</span> it is</Text>
          </Appear>
          <Appear>
            <Text size={1} margin="20px 0px" fit bold>But rather, how it is <span style={styles.keyword}>called</span></Text>
          </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("fat-arrows/the-problem.ts")}
          ranges={[
            { loc: [0, 0], title: "The Problem" },
            { loc: [2, 5], note: "Standard JS Class" },
            { loc: [5, 15] },
            { loc: [6, 9], note: "Access to member variables" },
            { loc: [9, 14], note: "Asynchronously call same function" },
            { loc: [16, 21] },
            { loc: [16, 21], note: <CodeRunner systemImport={importTs("fat-arrows/the-problem.ts")}></CodeRunner> },
            { loc: [10, 13], title: "'this' Isn't What You Think" },
            { loc: [11, 12], note: "'this' is bound based on how it is called" }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("fat-arrows/the-problem.fixed-with-bind.ts")}
          ranges={[
            { loc: [0, 0], title: "Fixing With Bind" },
            { loc: [9, 14] },
            { loc: [12, 13], note: "Bind 'this' keyword" },
            { loc: [16, 21] },
            { loc: [16, 21], note: <CodeRunner systemImport={importTs("fat-arrows/the-problem.fixed-with-bind.ts")}></CodeRunner> },
            { loc: [9, 14], title: "Ugly!" }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("fat-arrows/the-problem.fixed-with-closures.ts")}
          ranges={[
            { loc: [0, 0], title: "Fixing With Closures" },
            { loc: [9, 16] },
            { loc: [10, 11], note: "Capture 'this' using a closure" },
            { loc: [13, 14] },
            { loc: [18, 23] },
            { loc: [18, 23], note: <CodeRunner systemImport={importTs("fat-arrows/the-problem.fixed-with-closures.ts")}></CodeRunner> },
            { loc: [9, 16], title: "Less Ugly..." }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("fat-arrows/the-problem.fixed-with-arrow-functions.ts")}
          ranges={[
            { loc: [0, 0], title: "Fixing With Arrow Functions" },
            { loc: [5, 15] },
            { loc: [9, 14], note: "Replaced with an arrow function" },
            { loc: [16, 21] },
            { loc: [16, 21], note: <CodeRunner systemImport={importTs("fat-arrows/the-problem.fixed-with-arrow-functions.ts")}></CodeRunner> },
            { loc: [11, 12], note: "'this' is lexically bound" },
            { loc: [11, 12], note: <NoteImage src={images.actuallyMan} /> },
            { loc: [11, 12], note: "Arrow functions don't bind 'this'. Ever." }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Rest and Spread Operators
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("rest-and-spread/the-problem.es6")}
          ranges={[
            { loc: [0, 0], title: "Variable Number of Arguments" },
            { loc: [2, 5] },
            { loc: [2, 5], note: <CodeRunner filter="default" code={snippet("rest-and-spread/the-problem.es6")}></CodeRunner> },
            { loc: [6, 14] },
            { loc: [7, 9], note: "Convert 'arguments' to a real array" },
            { loc: [10, 13], note: "Manipulate the array normally" },
            { loc: [6, 14], note: "Makes a lot of assumptions" },
            { loc: [15, 19], note: "...which is a problem" },
            { loc: [15, 19], note: <CodeRunner filter="mixed" code={snippet("rest-and-spread/the-problem.es6")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("rest-and-spread/rest-params.ts")}
          ranges={[
            { loc: [0, 0], title: <span><code>...rest</code> FTW!</span> },
            { loc: [2, 10] },
            { loc: [4, 5], note: "Capture the rest of the arguments" },
            { loc: [5, 9], note: "'nums' is a normal array" },
            { loc: [11, 12], note: <CodeRunner filter="default" systemImport={importTs("rest-and-spread/rest-params.ts")}></CodeRunner> },
            { loc: [13, 21], note: "Any number of initial params" },
            { loc: [14, 18] },
            { loc: [22, 27] },
            { loc: [22, 27], note: <CodeRunner filter="nameSum" systemImport={importTs("rest-and-spread/rest-params.ts")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("rest-and-spread/spread-operator.ts")}
          ranges={[
            { loc: [0, 0], title: <span><code>...spread</code> is Awesome!</span>, note: "Tasty like jam!" },
            { loc: [3, 6], note: "Apply entire array to arguments" },
            { loc: [3, 8] },
            { loc: [3, 8], note: <CodeRunner filter="default" systemImport={importTs("rest-and-spread/spread-operator.ts")}></CodeRunner> },
            { loc: [10, 12], note: "Spread out array to arguments" },
            { loc: [10, 16] },
            { loc: [10, 16], note: <CodeRunner filter="spread" systemImport={importTs("rest-and-spread/spread-operator.ts")}></CodeRunner> },
            { loc: [18, 23], note: "Spread across elements of array" },
            { loc: [18, 27] },
            { loc: [18, 27], note: <CodeRunner filter="concat" systemImport={importTs("rest-and-spread/spread-operator.ts")}></CodeRunner> },
            { loc: [29, 30], note: "Add new element without mutating original" },
            { loc: [29, 34] },
            { loc: [29, 34], note: <CodeRunner filter="new-array" systemImport={importTs("rest-and-spread/spread-operator.ts")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Destructuring Assignment
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("destructuring/the-problem.array-destructuring.ts")}
          ranges={[
            { loc: [0, 0], title: "Getting Values From Arrays Sucks" },
            { loc: [3, 11], note: "Simple array of 'Person' objects" },
            { loc: [12, 14], note: "Pulling values out by index" },
            { loc: [14, 19], note: "Looping to build up collection" },
            { loc: [12, 23] },
            { loc: [12, 23], note: <CodeRunner filter="default" systemImport={importTs("destructuring/the-problem.array-destructuring.ts")}></CodeRunner> },
            { loc: [12, 23], title: "Yuck!" }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("destructuring/array-destructuring.ts")}
          ranges={[
            { loc: [0, 0], title: "Array Destructuring Assignment" },
            { loc: [3, 11], note: "Simple array of 'Person' objects" },
            { loc: [13, 14], note: "Pull out items, and assign them to variables" },
            { loc: [13, 18] },
            { loc: [13, 28], note: <CodeRunner filter="default" systemImport={importTs("destructuring/array-destructuring.ts")}></CodeRunner> },
            { loc: [21, 25] },
            { loc: [21, 22], note: "Can be used with function parameters" },
            { loc: [21, 27] },
            { loc: [21, 27], note: <CodeRunner filter="printFirst" systemImport={importTs("destructuring/array-destructuring.ts")}></CodeRunner> },
            { loc: [30, 34] },
            { loc: [30, 31], note: "Combined with rest operator" },
            { loc: [30, 36] },
            { loc: [34, 36], note: <CodeRunner filter="printRest" systemImport={importTs("destructuring/array-destructuring.ts")}></CodeRunner> },
            { loc: [39, 42], note: "Pull values from array return value" },
            { loc: [39, 45] },
            { loc: [39, 45], note: <CodeRunner filter="minMax" systemImport={importTs("destructuring/array-destructuring.ts")}></CodeRunner> },
            { loc: [48, 49], note: "Assign default values" },
            { loc: [48, 54] },
            { loc: [48, 54], note: <CodeRunner filter="default-vals" systemImport={importTs("destructuring/array-destructuring.ts")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("destructuring/object-destructuring.ts")}
          ranges={[
            { loc: [0, 0], title: "Object Destructuring Assignment" },
            { loc: [3, 11], note: "Simple array of 'Person' objects" },
            { loc: [12, 13], note: "Grab first item in array" },
            { loc: [14, 15], note: "Pull out properties and assign to variables" },
            { loc: [12, 18] },
            { loc: [12, 18], note: <CodeRunner filter="default" systemImport={importTs("destructuring/object-destructuring.ts")}></CodeRunner> },
            { loc: [12, 18], note: <NoteImage src={images.destructuring.extraPropError} /> },
            { loc: [21, 22], note: "Rename variables" },
            { loc: [21, 26] },
            { loc: [21, 26], note: <CodeRunner filter="new-property-names" systemImport={importTs("destructuring/object-destructuring.ts")}></CodeRunner> },
            { loc: [29, 32] },
            { loc: [31, 32], note: "Pull properties from function params" },
            { loc: [29, 35] },
            { loc: [29, 35], note: <CodeRunner filter="total-ages" systemImport={importTs("destructuring/object-destructuring.ts")}></CodeRunner> },
            { loc: [40, 44], note: "What about missing properties?" },
            { loc: [46, 52] },
            { loc: [46, 52], note: <CodeRunner filter="total-ages-unsafe" systemImport={importTs("destructuring/object-destructuring.ts")}></CodeRunner> },
            { loc: [58, 61] },
            { loc: [59, 60], note: "Assign default values" },
            { loc: [58, 65] },
            { loc: [58, 65], note: <CodeRunner filter="total-ages-safe" systemImport={importTs("destructuring/object-destructuring.ts")}></CodeRunner> },
            { loc: [66, 71] },
            { loc: [72, 76], note: "Copy unassigned properties" },
            { loc: [72, 76], note: <NoteImage src={images.destructuring.objectSpread} /> },
            { loc: [72, 81], note: <CodeRunner filter="defaults" systemImport={importTs("destructuring/object-destructuring.ts")}></CodeRunner> },
            { loc: [84, 87], note: "Simple shallow clone" },
            { loc: [84, 92] },
            { loc: [84, 92], note: <CodeRunner filter="cloned" systemImport={importTs("destructuring/object-destructuring.ts")}></CodeRunner> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Async and Await
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("async-await/async-with-promises.ts")}
          ranges={[
            { loc: [0, 0], title: "Asynchronous With Promises" },
            { loc: [1, 4], note: "Promise based service" },
            { loc: [5, 19] },
            { loc: [6, 8], note: "Need to use both values" },
            { loc: [9, 11], note: "Capture both values when finished" },
            { loc: [13, 14], note: "Pass values to another async call" },
            { loc: [15, 18], note: "Final result" },
            { loc: [20, 27], note: "Execute and log when finished" },
            { loc: [20, 27], note: <CodeRunner filter="default" systemImport={importTs("async-await/async-with-promises.ts")} /> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("async-await/async-await.ts")}
          ranges={[
            { loc: [0, 0], title: "What if..." },
            { loc: [0, 0], title: "You Could Write Async Code" },
            { loc: [0, 0], title: "Like It Was Synchronous?" },
            { loc: [0, 0], note: "*giddy with excitement*" },
            { loc: [0, 0], title: "Wait for it..." },
            { loc: [5, 12] },
            { loc: [5, 12], note: <NoteVideo height="500px" src={images.mindBlown.replace("/", "")} /> },
            { loc: [5, 12] },
            { loc: [5, 6], note: "async keyword before functions" },
            { loc: [6, 9], note: "await keyword to resolve Promises" },
            { loc: [10, 11], note: "Use values normally" },
            { loc: [15, 19], note: "Function is still asynchronous" },
            { loc: [15, 19], note: <CodeRunner filter="default" systemImport={importTs("async-await/async-await.ts")} /> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Generators
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("generators/simple-generator.ts")}
          ranges={[
            { loc: [0, 0], title: "Simple Generator" },
            { loc: [2, 6], note: "Special syntax" },
            { loc: [3, 5], note: "'yield' values one at a time" },
            { loc: [7, 8], note: "Iterable return value" },
            { loc: [9, 12], note: "Advance execution with each .next() call" },
            { loc: [9, 16] },
            { loc: [9, 16], note: <CodeRunner filter="default" systemImport={importTs("generators/simple-generator.ts")} /> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("generators/yielding-execution.ts")}
          ranges={[
            { loc: [0, 0], title: "Yielding Execution" },
            { loc: [2, 11] },
            { loc: [3, 10], note: "Execution yields back to the caller" },
            { loc: [12, 16], note: "Grab a couple of values" },
            { loc: [17, 18], note: "Do other work" },
            { loc: [19, 25], note: "Finish exhasting generator" },
            { loc: [19, 25], note: <CodeRunner filter="default" systemImport={importTs("generators/yielding-execution.ts")} /> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("generators/fibonacci.ts")}
          ranges={[
            { loc: [0, 0], title: "Infinite Series" },
            { loc: [2, 14] },
            { loc: [6, 13], note: "Generate never finishes" },
            { loc: [15, 20], note: "Keep pulling values forever" },
            { loc: [15, 20], note: <CodeRunner systemImport={importTs("generators/fibonacci.ts")} /> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Proxies
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("proxies/simple-get-handler.ts")}
          ranges={[
            { loc: [0, 0], title: "Intercepting Properties" },
            { loc: [2, 7], note: "Simple POJO" },
            { loc: [8, 13], note: "Wrap object in proxy; Pass in handler" },
            { loc: [9, 12], note: "Intercept property access" },
            { loc: [14, 20] },
            { loc: [14, 20], note: <CodeRunner systemImport={importTs("proxies/simple-get-handler.ts")} /> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("proxies/change-detection.ts")}
          ranges={[
            { loc: [0, 0], title: "Intercepting Properties (cont.)" },
            { loc: [2, 6], note: "Simple POJO" },
            { loc: [7, 18], note: "Wrap in proxy" },
            { loc: [8, 9], note: ".set() handler" },
            { loc: [9, 16], note: "Detect if property changes" },
            { loc: [15, 16], note: "Return 'true' for success" },
            { loc: [19, 21] },
            { loc: [19, 21], note: <CodeRunner systemImport={importTs("proxies/change-detection.ts")} /> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("proxies/logger.ts")}
          ranges={[
            { loc: [0, 0], title: "Intercepting Methods" },
            { loc: [3, 10], note: "Simple object" },
            { loc: [6, 9], note: "Member that prints name" },
            { loc: [11, 12] },
            { loc: [15, 28], note: "Log all method calls" },
            { loc: [16, 25], note: "Loop over each property" },
            { loc: [19, 24], note: "Check to see if property is function" },
            { loc: [22, 23], note: "Replace method with Proxy" },
            { loc: [29, 38] },
            { loc: [29, 30], note: "Generic type constraint" },
            { loc: [31, 36], note: ".apply() handler" },
            { loc: [32, 33], note: "Log method name and arguments" },
            { loc: [34, 35], note: "Call method normally" },
            { loc: [11, 14] },
            { loc: [11, 14], note: <CodeRunner systemImport={importTs("proxies/logger.ts")} /> },
            { loc: [11, 14], title: "Type Guards" },
            { loc: [15, 25], note: <NoteImage src={images.typeGuard.first} /> },
            { loc: [15, 25], note: <NoteImage src={images.typeGuard.second} /> },
            { loc: [15, 25], note: <NoteImage src={images.typeGuard.third} /> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Decorators
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("decorators/simple-class-decorator.ts")}
          ranges={[
            { loc: [0, 0], title: "What Are Decorators?" },
            { loc: [2, 5], note: "Just a function" },
            { loc: [6, 7], note: "Invoked using special syntax" },
            { loc: [6, 13], note: "Applies to a target" },
            { loc: [2, 5], note: "Passed to decorator at runtime" },
            { loc: [14, 18], note: "Object now has new behavior" },
            { loc: [14, 18], note: <CodeRunner systemImport={importTs("decorators/simple-class-decorator.ts")} /> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("decorators/mixin-decorator.ts")}
          ranges={[
            { loc: [0, 0], title: "Mixin Decorator" },
            { loc: [2, 11], note: "Simple mixin with single method" },
            { loc: [6, 11] },
            { loc: [12, 21] },
            { loc: [12, 13], note: "Passing an argument to decorator" },
            { loc: [13, 14], note: "Class implements mixin interface" },
            { loc: [19, 20], note: "Dummy member. Will be overriden" },
            { loc: [28, 36], note: "Factory function" },
            { loc: [30, 34], note: "Copy properties to prototype" },
            { loc: [22, 25] },
            { loc: [22, 25], note: <CodeRunner systemImport={importTs("decorators/mixin-decorator.ts")} /> }
          ]}>
        </CodeSlide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={snippet("decorators/method-decorator.ts")}
          ranges={[
            { loc: [0, 0], title: "Method Decorator" },
            { loc: [31, 34], title: "Scary!", note: "Maybe we should confirm this first?" },
            { loc: [3, 13], note: "Use decorator to add confirmation step" },
            { loc: [5, 6] },
            { loc: [38, 47] },
            { loc: [38, 39], note: "Capture provided message" },
            { loc: [39, 43], note: "Target. Property Name. Property Descriptor." },
            { loc: [44, 45], note: "Capture original method" },
            { loc: [46, 56], note: "Replace with new one" },
            { loc: [48, 49], note: "Show confirmation" },
            { loc: [50, 53], note: "Execute method if they said yes" },
            { loc: [54, 55], note: "Otherwise cancel" },
            { loc: [46, 56] },
            { loc: [5, 13] },
            { loc: [31, 34], note: "Normal method call" },
            { loc: [31, 34], note: <CodeRunner systemImport={importTs("decorators/method-decorator.ts")} /> }
          ]}>
        </CodeSlide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Text margin="40px 0 0" size={1} fit bold>
            The best part of <span style={styles.keyword}>TypeScript</span>
          </Text>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              Is actually the <span style={styles.keyword}>JavaScript</span>.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Text margin="40px 0 0" size={1} fit bold>
            TypeScript lets you <span style={styles.keyword}>unlock</span> JavaScript
          </Text>
          <Appear>
            <Text margin="40px 0 0" size={1} bold>
              And...
            </Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0" size={1} fit bold>
              The <span style={styles.keyword}>types</span> are pretty cool too.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} margin="0px auto 40px" textColor="secondary">
            Thank You!
          </Heading>
          <Heading size={1} fit caps lineHeight={1} margin="0px auto 40px" textColor="secondary">
            https://github.com/jwcarroll/unlocking-javascript-via-typescript
          </Heading>
          <Layout>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                Josh Carroll
              </Text>
            </Fill>
            <Fill>
              <Text margin="40px 0 0" textColor="tertiary" size={1} bold>
                @jwcarroll
              </Text>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}

function snippet(fileName) {
  return require(`raw-loader!../app${addForwardSlash(fileName)}`);
}

function importTs(fileName) {
  return `/app/compiled${addForwardSlash(fileName).replace(".ts", ".js")}`;
}

function addForwardSlash(str) {
  return /^\//g.test(str) ? str : `/${str}`;
}

function NoteImage(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img {...props} />
    </div>
  );
}

function NoteVideo(props) {
  const { height, ...rest } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <video height={height} autoPlay loop>
        <source {...rest}></source>
      </video>
    </div>
  );
}
