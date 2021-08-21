import '~app.scss'
import Echo from 'laravel-echo';
import api from "@/util/api";

function MyApp({Component, pageProps}) {
    if (process.browser) {
        window.Pusher = require('pusher-js');

        window.Echo = new Echo({
            authEndpoint: 'http://127.0.0.1:8000/pusher/auth',
            broadcaster: 'pusher',
            key: process.env.NEXT_PUBLIC_MIX_PUSHER_APP_KEY,
            cluster: process.env.NEXT_PUBLIC_MIX_PUSHER_APP_CLUSTER,
            forceTLS: true,
        });
    }

    return <Component {...pageProps} />
}

export default MyApp
