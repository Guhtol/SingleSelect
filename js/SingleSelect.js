var SgSelect = (function () {
    var option = {},
        opFragment = {},
        textSelected = [],
        valueSelected = [],
        arrayPropertyWrong = [];


    var len,
        i,
        checkFirst = true;


    InnerSelect.prototype.append = append;

    InnerSelect.prototype.selectItem = selectItem;

    InnerSelect.prototype.defaultItem = defaultItem;

    InnerSelect.prototype.reset = resetSelect;

    return InnerSelect;

    function InnerSelect(selectId) {

        if (this instanceof InnerSelect) {

            this.selectHtml = document.getElementById(selectId);

            this.text = getSelectedText;

            this.value = getSelectedValue;

        } else {

            return new InnerSelect(selectId);
        }
    };

    function getSelectedText() {

        textSelected = [];

        if (this.selectHtml.multiple) {

            resetWhile(this.selectHtml.selectedOptions);

            while (i < len) {

                textSelected.push(this.selectHtml.selectedOptions[i].text);

                i++;
            }

            return textSelected;

        } else {

            return this.selectHtml.options[this.selectHtml.selectedIndex].text;
        }

    };
    function getSelectedValue() {

        valueSelected = [];

        if (this.selectHtml.multiple) {

            resetWhile(this.selectHtml.selectedOptions);

            while (i < len) {

                valueSelected.push(this.selectHtml.selectedOptions[i].value);

                i++;
            }

            return valueSelected;

        } else {

            return this.selectHtml.options[this.selectHtml.selectedIndex].value;
        }
    };

    function append(obj, text, value) {

        //here  set the default value to run while
        resetWhile(obj);

        opFragment = document.createDocumentFragment('option');

        // if obj it's not array 
        if (len === undefined) {

            createOption(obj, text, value);
        }
        // if obj is array
        while (i < len) {

            createOptionArray(obj, text, value, i);

            i++;
        }

        this.selectHtml.appendChild(opFragment);

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
    function resetSelect() {
        
        this.selectHtml.innerHTML = "";
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

        arrayPropertyWrong = [];

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
})();