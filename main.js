let birinchison = prompt('misoldagi birinchi soningizni kiriting')

let ikkinchison = prompt('misoldagi ikkinchi soningizni kiriting')



let amal = prompt('kerakli amalni tanlang:  1=(+)  2=(-)  3=(x)  4=(:) ')

if (amal == 1) {
    alert(birinchison + '+' + ikkinchison + '=' + (birinchison + ikkinchison))
}

else if (amal == 2) {
    alert(birinchison + '-' + ikkinchison + '=' + (birinchison - ikkinchison))
}

else if (amal == 3) {
    alert(birinchison + 'x' + ikkinchison + '=' + (birinchison * ikkinchison))
}

else if (amal == 4) {
    alert(birinchison + ':' + ikkinchison + '=' + (birinchison / ikkinchison))
}