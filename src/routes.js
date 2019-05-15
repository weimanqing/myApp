import NotFound from './views/notFound';
import App from './views/app';
import Hello from './views/hello';
// import World from './views/world';
import World from '@views/world';





// export default [
//   {
//     path: '/',
//     component: App,
//     // loadData: App.loadData,
//     routes: [
//       {
//         path: '/',
//         component: Hello,
//         exact: true,
//         // loadData: Home.loadData,
//         // key: 'hello'
//       },{
//         path: '/hello',
//         component: Hello,
//         // loadData: Translation.loadData,
//         // exact: true,
//         // key: 'hello'
//       },
//       {
//         path: '/world/:id/:name',
//         component: World,
//         // loadData: Translation.loadData,
//         // exact: true,
//         // key: 'world'
//       },
//       {
//         component: NotFound
//       }
//     ]
//   }
// ];


export default [{
  path: '/',
  component: Hello,
  exact: true,
  // loadData: Home.loadData,
  key: 'hello'
},{
  path: '/hello',
  component: Hello,
  // loadData: Translation.loadData,
  // exact: true,
  key: 'hello'
},
{
  path: '/world/:id/:name',
  component: World,
  // loadData: Translation.loadData,
  // exact: true,
  key: 'world'
},
{
  component: NotFound
}];


