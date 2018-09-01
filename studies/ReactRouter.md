# React Router

## Basics

There are a few libs under "react-router", but for web projects, you only need **react-router-dom**.

In the code, write:

`import { BrowserRouter as Router, Link, Route } from 'react-router-dom';`

For web apps, there's `BrowserRouter` and `HashRouter`, by the way. Both of these will create a specialized history object for you. Generally speaking, you should use a `BrowserRouter` if you have a server that responds to requests and a `HashRouter` if you are using a static file server. 

Then surround the app's code with `<Router></Router>` (the topmost part of the code that uses navigation).

``` javascript
<Router>
  <MyAppStuff />
</Router>
```

To create a navigable component, surround it with `<Link></Link>`, adding the `to` property:

``` javascript
<Link to="/someplace">
  <Component />
</Link>
```

Within one of the components surrounded by `<Router></Router>`, put a "route matcher", by doing:

``` javascript
<Route
  path="/optional-prefix/:itemId/"
  component={MyComp}
/>
```

Notice that we have a special parameter `itemId` that has a semicolon in front of it. That will be our 'wildcard', a parameter the router will match against any content, given that the rest of the route matches. So, in `MyComp`, I can check for params that were passed in the URL via the `match` prop, like so:

``` javascript
const MyComp = ({ match }) => (
  <div>I received this ID: {match.params.itemId}</div>
);
```

For routes that display very simple content (like a simple greeting message when the user gets to the root of the site), instead of passing the `component` property, you can use the `render` prop, passing in a function, like:

``` javascript
<Route
  path="/"
  render={() => (<div>Welcome to my Site!</div>)}
/>
```

However, how do we prevent the root route from matching that previous ``path="/optional-prefix/:itemId"`? That's where the `exact` attribute comes in. If we do:

``` javascript
<Route
  exact
  path="/"
  render={() => (<div>Welcome to my Site!</div>)}
/>
```

We make sure that it only matches that exact route, so if you add more stuff to the end of the URL (given it's not a query string), it won't match.

Finally, going back to our previous route, let's say we don't want `MyComp` to have to deal with `match` - we just want it to receive whatever data we're passing in the URL. We could also write it like this:

``` javascript
<Route
  exact
  path="/optional-prefix/:itemId/"
  render={({ match }) => (<MyComp itemId={match.params.itemId} />)}
/>
```

## Route Matching

For route matching, we deal with basically 2 components: `Route` and `Switch`. `Route` renders a component if the given route matches (exactly or not) the current location's pathname. If the pathname doesn't match a `Route`s path, it renders `null`, like so:

``` javascript
// when location = { pathname: '/about' }
<Route path='/about' component={About}/> // renders <About/>
<Route path='/contact' component={Contact}/> // renders null
<Route component={Always}/> // renders <Always/>
```

When using it surrounded by `<Switch></Switch>`, the routes will be iterated over and the first one that matches will be rendered.

(stopped at: https://reacttraining.com/react-router/web/guides/basic-components)