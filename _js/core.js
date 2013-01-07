/*
* Visual Font Size Guide code
*/

// Custom Namespace
var FSG = {
    // HTML Element that holds all the examples
    container : document.getElementById('typeexamples'),

    // path to data source
    dataSrc : '_data/typefaces.json',

    // object to hold returned data
    fontData : null,

    // Function to handle UI events
    addEvent : function(obj, evType, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evType, fn, false);
            return true;
            // and 'Cuz MS sucks ballz!
        } else if (obj.attachEvent) {
            var forIE = obj.attachEvent("on" + evType, fn);
            return forIE;
        } else {
            return false;
        }
    },
    // function to retrive and load the font dataset
    getData : function(dataSrc) {
        $.ajax({
            type : 'GET',
            url : dataSrc,
            dataType : 'JSON',
            success : function(data) {
                FSG.fontData = data;
                FSG.fontMenu();
                FSG.content();
            }
        });
    },
    // function to generate and render font size examples
    content : function() {
        var container = FSG.container;
        container.style.fontFamily = 'sans-serif';
        container.style.fontStyle = 'normal';
        container.style.fontWeight = 400;
        container.style.textTransform = 'capitalize';
        var fontsizes = FSG.fontData.fontinfo.typesizes;
        var fontsizesLen = fontsizes.length;
        var size = 0;
        var examples = '';
        for ( size = 0; size < fontsizesLen; size++) {
            examples += '<p><span class="sizeinfo">' + (fontsizes[size] * (72 / 96)) + 'pt = ' + fontsizes[size] + 'px = ' + (Math.round((fontsizes[size] / FSG.baselineFontSize) * 100)) + '% : </span><br> <span style="font-size:' + fontsizes[size] + 'px;">The quick brow fox jumps over the lazy dog.</span></p><hr>';
        }
        container.innerHTML = examples;
    },
    // function to generate and render font menu content
    fontMenu : function() {
        var fontfacelist = document.getElementById('typefaces');
        var fontfaces = FSG.fontData.fontinfo.typefaces;
        var fontsLen = fontfaces.length;
        var font = 0;
        var menuoptions = '';
        for ( font = 0; font < fontsLen; font++) {
            menuoptions += '<option id="' + fontfaces[font] + '" value="' + fontfaces[font] + '">' + fontfaces[font] + '</option>';
        };
        fontfacelist.innerHTML = '<option>Select a Typeface...</option>' + menuoptions;
    },
    // function to change baseline font size
    changeBaseline : function() {
        var baseSelected = this.value;
        var baselineFontSize = FSG.baselineFontSize;
        switch(caseSelected) {
            case '12':
                baselineFontSize = baseSelected;
                break;
            case '14':
                baselineFontSize = baseSelected;
                break;
            case '16':
                baselineFontSize = baseSelected;
                break;
            default:
                baselineFontSize = 14;
        };
    },
    // function to change font case based on user selection
    changeCase : function() {
        var caseSelected = this.value;
        var container = FSG.container;
        switch(caseSelected) {
            case 'capitalize':
                container.style.textTransform = caseSelected;
                break;
            case 'lowercase':
                container.style.textTransform = caseSelected;
                break;
            case 'uppercase':
                container.style.textTransform = caseSelected;
                break;
            default:
                container.style.textTransform = 'capitalize';
        };
    },
    // function to change font face based on user selection
    changeFont : function() {
        var fontSelected = this.value;
        var container = FSG.container;
        container.style.fontFamily = fontSelected;
    },
    // function to change font style based on user selection
    changeStyle : function() {
        var styleSelected = this.value;
        var container = FSG.container;
        switch(styleSelected) {
            case 'normal':
                container.style.fontStyle = styleSelected;
                container.style.fontWeight = 400;
                break;
            case 'bold':
                container.style.fontWeight = 700;
                break;
            case 'italic':
                container.style.fontStyle = styleSelected;
                container.style.fontWeight = 400;
                break;
            case 'bolditalic':
                container.style.fontStyle = 'italic';
                container.style.fontWeight = 700;
                break;
            default:
                container.style.fontStyle = 'normal';
                container.style.fontWeight = 400;
        };
    },
    // function to intialize the program
    init : function() {
        // load get data function
        FSG.getData(FSG.dataSrc);

        // load UI event listeners
        FSG.addEvent(document.getElementById('typecase'), 'change', FSG.changeCase);
        FSG.addEvent(document.getElementById('typefaces'), 'change', FSG.changeFont);
        FSG.addEvent(document.getElementById('typestyle'), 'change', FSG.changeStyle);
    }
};

FSG.init();