window.onload=function(){

    let points = document.getElementsByClassName("unsel");



    console.log('Random Text');
    console.log(points.length);

    function clickHead() {
        let points = document.getElementsByClassName("unsel");
        console.log(points.length);
    }

    function clickpt() {
        let xval = this.cx;
        let yval = this.cy;
        // Add the coordinates of the last clicked point (this point)
        let coords = '(' + (xval.baseVal.value / 30) + ', ' + ((300 - yval.baseVal.value) / 30) + ')';
        console.log(xval.baseVal.value / 30);
        console.log((300 - yval.baseVal.value) / 30);
        document.getElementById('lastClicked').innerHTML = 'Last Point Clicked: ' + coords;
        // Adds or removes a border for this circle based on current border status
        if (this.classList.contains('bord')) {
            this.classList.remove('bord');
        } else {
            this.classList.add('bord');
        }
    }

    document.getElementById("heee").addEventListener('click', clickHead);
    // document.getElementById("swag").addEventListener('click', clickpt);

    for (var i = 0; i < points.length; i++) {
        points[i].addEventListener('click', clickpt);
    }
}


