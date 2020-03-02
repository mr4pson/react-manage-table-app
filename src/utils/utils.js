export function sliceData(data, pageRowLimit = 14) {
    var i, j, temparray, slicedData = [], chunk = pageRowLimit;
    for (i = 0, j = data.length; i < j; i += chunk) {
        temparray = data.slice(i, i + chunk);
        slicedData.push(temparray);
    }
    return slicedData;
}

export function sortAsc(keyName, a, b) {
    if ((typeof a[keyName] === "number" && a[keyName] > b[keyName]) 
        || (typeof a[keyName] === "string" && a[keyName].toString().toLowerCase() > b[keyName].toString().toLowerCase())) {
        return 1;
    }
    if ((typeof a[keyName] === "number" && a[keyName] < b[keyName]) 
        || (typeof a[keyName] === "string" && a[keyName].toString().toLowerCase() < b[keyName].toString().toLowerCase())) {
        return -1;
    }
    return 0;
}

export function sortDesc(keyName, a, b) {
    if ((typeof a[keyName] === "number" && a[keyName] < b[keyName]) 
        || typeof (a[keyName] === "string" && a[keyName].toString().toLowerCase() < b[keyName].toString().toLowerCase())) {
        return 1;
    }
    if ((typeof a[keyName] === "number" && a[keyName] > b[keyName]) 
        || (typeof a[keyName] === "string" && a[keyName].toString().toLowerCase() > b[keyName].toString().toLowerCase())) {
        return -1;
    }
    return 0;
}