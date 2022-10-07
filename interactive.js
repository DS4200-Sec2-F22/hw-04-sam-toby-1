//Wrapped in onload to load the JS script after the html has loaded
//This is done to ensure no references are null.
window.onload=function(){

    
    let points = document.getElementsByClassName("unsel");

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

    function createPoint() {
        //Inserts new <circle> tag based on inputs
        let xCoord = document.getElementById('xSelect');
        let yCoord = document.getElementById('ySelect');
        let prevText = document.getElementById("svgCanvas").innerHTML;
        let xval1 = parseInt(xCoord.options[xCoord.selectedIndex].text);
        let yval1 = parseInt(yCoord.options[yCoord.selectedIndex].text);
        let newCirc = '<circle class="unsel" cx="' + (xval1 * 30) + '" cy="' + (300 - (yval1 * 30)) + '" r="10"/>';
        let fullImg = prevText + newCirc;
        document.getElementById('svgCanvas').innerHTML = fullImg;

        //Readds the event listener to the new circle
        for (var i = 0; i < points.length; i++) {
            points[i].addEventListener('click', clickpt);
        }

    }

    document.getElementById("inputButton").addEventListener('click', createPoint);
 
    
    for (var i = 0; i < points.length; i++) {
        points[i].addEventListener('click', clickpt);
    }
}


