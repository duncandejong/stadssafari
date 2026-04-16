// plugins/moovee.client.ts <- Nuxt plugin to inject Moovee Tickets CSS and JS
export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        /* 1️⃣ datalayer eerst */
        window.dataLayer = window.dataLayer || []

        /* 2️⃣ css */
        const link = document.createElement('link')
        link.rel  = 'stylesheet'
        link.href = 'https://cdn.moovee.app/lib/mv-tickets@latest/mv-tickets.min.css'
        document.head.appendChild(link)

        /* 3️⃣ script */
        const script = document.createElement('script')
        script.src   = 'https://cdn.moovee.app/lib/mv-tickets@latest/mv-tickets.umd.min.js'
        script.defer = true
        script.onload = () => window.dispatchEvent(new CustomEvent('moovee-ready'))
        document.head.appendChild(script)
    }
})