export function parseDate(date) {
    let msDate = Date.parse(date);
    let formatDate = new Date(msDate);

    let dd = formatDate.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }

    let mm = formatDate.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }

    let yy = formatDate.getFullYear();
    if (yy < 10) {
        yy = '0' + yy;
    }

    return dd + '.' + mm + '.' + yy;
}