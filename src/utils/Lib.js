

export function getFaviconUrl(url){

    let hostname = getHostname(url)

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

export function isValidEmail(email){

    if(email === null || email === ''){
        return false;
    }

    const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(!pattern.test(email)){
        return false;
    }

    return true;
    
}

export function isValidUsername(username){

    if(username === null || username === ''){
        return false;
    }

    const pattern = new RegExp(/^[a-z]{3,16}$/);

    if(!pattern.test(username)){
        return false;
    }

    return true;

}
