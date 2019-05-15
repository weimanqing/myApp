import routeCheck from 'koot/React/route-check';
import App from '@views/app';

export default {
  component: App,
  name: 'app-root',

  indexRoute: {
    getComponent: (nextState,cb) => {
      require.ensure(
        [],
        (require) => {
          if(routeCheck(nextState)) {
            cb(null,require('@views/home').default);
          }
        },
        'Page: Home'
      );
    }
  },

  childRoutes: [
    {
      path: 'record',
      name: 'Page: Static Assets',
      getComponent: (nextState,cb) => {
        require.ensure(
          [],
          (require) => {
            if(routeCheck(nextState)) {
              cb(null,require('@views/record').default);
            }
          },
          'Page: Static Assets'
        );
      }
    },
    {
      path: '*',
      name: 'Page: Static Assets',
      getComponent: (nextState,cb) => {
        require.ensure(
          [],
          (require) => {
            if(routeCheck(nextState)) {
              cb(null,require('@views/404').default);
            }
          },
          'Page: Static Assets'
        );
      }
    }
  ]
};
