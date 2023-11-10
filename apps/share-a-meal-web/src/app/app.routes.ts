import { Route } from '@angular/router';


import { NxWelcomeComponent } from './nx-welcome.component';
import { MealListComponent } from 'libs/share-a-meal/features/src/lib/meal/meal-list/meal-list.component';
import { MealDetailComponent } from 'libs/share-a-meal/features/src/lib/meal/meal-detail/meal-detail.component';
import { AboutComponent } from 'libs/share-a-meal/features/src/lib/about/about.component';

//  export const appRoutes: Route[] = [
//  {
//      path:'',
//      component: NxWelcomeComponent,
//      children: [
   
//          {
//              path:'meals',
//              pathMatch:'full',
//              component: MealListComponent,
//              children: [
//                  {                
//                  path:':id',
//                  pathMatch: 'full',
//                  component: MealDetailComponent,
//              }           
//              ],
//          },
//          {
//              path:'about',
//              pathMatch:'full',
//              component: AboutComponent,
//          }
//      ]


//  }
//  ];


export const appRoutes: Route[] = [
    {
        // startup
        path:'',
        pathMatch:'full',
        redirectTo: '/home'   
    },

    {
        path:'home',
        pathMatch:'full',
        component:NxWelcomeComponent,
    },
    {
        path:'meal',
        // pathMatch:'full',
        loadChildren:() =>
        import('@avans-nx-workshop/share-a-meal/features').then(
            (esModule) => (esModule.FeaturesModule)
        )
    },
    {
        path:'user',
       // pathMatch:'full',
        loadChildren:() =>
        import('@avans-nx-workshop/share-a-meal/features').then(
            (esModule) => (esModule.FeaturesModule)
        )
    },
    {
        path:'about', 
        component:AboutComponent,
    },
    {
        path:'contact',
        component:AboutComponent,
    },
    // {
    //     // catch all
    //     path:'**',
    //     redirectTo:'home'
    // },
]

  //  loadChildren:() =>
    //  import('@avans-nx-workshop/share-a-meal/user').then(
    //   (esModule) => (esModule.UserModule))