
// let location = createLocation('/');
// let history = new MemoryHistory(['/']);
//
// let tree = testRouterTree(
//   <Router history={history} location={location}>
//     <Route path='/' component={TestComponent} />
//   </Router>
// );
//
// tree.wooo; // woooooo!
//
// function testRouterTree (router) {
//   var oldRenderFn = router.type.prototype.render;
//   router.type.innerComponentRef = 'innerComponent';
//   router.type.prototype.render = function () {
//     var renderTree = oldRenderFn.apply(this, arguments);
//     return React.cloneElement(renderTree, {
//       ref: 'innerComponent'
//     });
//   };
//   return testTree(router);
// }
