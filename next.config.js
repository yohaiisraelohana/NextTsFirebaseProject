/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true
    },
    images : {
        domains:["fakeimg.pl"]
    }
}

module.exports = nextConfig
