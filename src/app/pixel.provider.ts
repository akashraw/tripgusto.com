// import { Provider, APP_BOOTSTRAP_LISTENER, ComponentRef } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { PixelService } from './pixel.service';

// export const FACEBOOK_PIXEL_PROVIDER: Provider = {
//   provide: APP_BOOTSTRAP_LISTENER,
//   multi: true,
//   useFactory: FacebookPixelRouterInitializer,
//   deps: [
//     PixelService,
//     Router
//   ]
// };

// export function FacebookPixelRouterInitializer(
//   $fpService: PixelService,
//   $router: Router
// ) {
//   return async (c: ComponentRef<any>) => {
//     $router
//       .events
//       .subscribe(event => {
//         if (event instanceof NavigationEnd) {
//           console.log(`Navigated to URL: ${event.url}`);
//           $fpService.load();
//         }
//       });
//   };
// }