<<<<<<< HEAD
/* import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase('http://localhost:8090');
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = structuredClone(event.locals.pb.authStore.model);
    } else {
        event.locals.user = undefined;
    }

    const response = await resolve(event);

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}; */
=======
/* import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase('http://localhost:8090');
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = structuredClone(event.locals.pb.authStore.model);
    } else {
        event.locals.user = undefined;
    }

    const response = await resolve(event);

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}; */
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4
