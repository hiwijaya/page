

export async function getFaviconUrl(link){

    let hostname = getHostname(link)

    return`https://api.faviconkit.com/${hostname}/32`;
}


function getHostname(url){

    let hostname = '';

    // find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf('//') > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];

    // find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}
