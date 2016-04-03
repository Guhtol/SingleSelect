var SgSelect = (function () {
    var option = {},
        opFragment = {},
        arrayPropertyWrong = [],
        sele = {};


    var len,
        i,
        checkFirst = true;


    InnerSelect.prototype.add = add;

    InnerSelect.prototype.appendTo = append;

    InnerSelect.prototype.selectItem = selectItem;

    InnerSelect.prototype.defaultItem = defaultItem;

    return InnerSelect;

    function InnerSelect(text,value) {

        if (this instanceof InnerSelect) {

            this.selectHtml = document.createElement("select");
            
            this.

            this.text = getSelectedText;

            this.value = getSelectedValue;

        } else {

            return new InnerSelect(property);
        }
    };

    function getSelectedText() {

        return this.selectHtml.options[this.selectHtml.selectedIndex].text;
    };
    function getSelectedValue() {

        return this.selectHtml.options[this.selectHtml.selectedIndex].value;
    };
    function add(obj, text, value, callback) {

        opFragment = document.createDocumentFragment('option');

        if (isArray(obj)) {

            //here  set the default value to run while
            resetWhile(obj);

            while (i < len) {

                if (typeof callback !== undefined) {

                    callback(obj[i]);
                }
                createOptionArray(obj, text, value, i);

                i++;
            }
        } else {

            createOption(obj, text, value);
        };

        this.selectHtml.appendChild(opFragment);
    };
    function append(el) {
        if (typeof el === 'string') {
            
            append(document.getElementById(el));
        }
        el.appendChild(this.selectHtml);

    };

    function selectItem(item) {

        this.selectHtml.value = item;

    };
    function defaultItem(item) {

        option = document.createElement('option');

        option.textContent = item;

        option.value = "";

        this.selectHtml.appendChild(option);

    };

    function createOption(obj, text, value) {

        isProperty(obj, text, value)

        option = document.createElement('option');

        option.textContent = obj[text].toString();

        option.value = obj[value].toString();

        opFragment.appendChild(option);
    };

    function createOptionArray(obj, text, value) {
       
        //check if have property text and value in object;
        checkFirstObject(obj, text, value);

        option = document.createElement('option');

        option.textContent = obj[i][text].toString();

        option.value = obj[i][value].toString();

        opFragment.appendChild(option);
    };

    function checkFirstObject(obj, text, value) {

        //check once
        if (checkFirst) {

            checkFirst = false;

            isProperty(obj[i], text, value);
        }
    };

    function isProperty(obj, text, value) {

        if (typeof obj === 'object') {

            if (!obj.hasOwnProperty(text)) {

                arrayPropertyWrong.push(text);
            }
            if (!obj.hasOwnProperty(value)) {

                arrayPropertyWrong.push(value);
            }
            if (arrayPropertyWrong.length > 0) {

                throw new Error('object not have this property = ' + arrayPropertyWrong.join(','));
            }
        } else {

            throw new Error('it is not a object');
        }
    };

    function resetWhile(obj) {

        len = obj.length;

        i = 0;
    };
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
})();