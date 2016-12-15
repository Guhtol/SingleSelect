(function (root) {
    'use strict'

    return root.sgSelect = {
        init: init,
        getValue: getSelectedValue,
        getText: getSelectedText
    }

    function init(select) {
        return function (value) {
            return function (text) {
                return function (obj) {
                    var fragment = document.createDocumentFragment('option')
                    if (typeof select === "string")
                        select = document.getElementById(select)

                    if (select === null)
                        throw 'Verifique o seletorId'

                    select.appendChild(createFragment(fragment, obj, value, text))

                    return select;
                }
            }
        }
    }

    function createFragment(fragment, obj, value, text) {
        if (isArray(obj)) {
            obj.map(function (item) {
                if (!checkProperty(item, value) || !checkProperty(item, text))
                    throw 'Verifique os nomes das propriedades'
                fragment.appendChild(createOption(item, value, text))
            })
        } else {
            if (!checkProperty(obj, value) || !checkProperty(obj, text))
                throw 'Verifique os nomes das propriedades'
            fragment.appendChild(createOption(obj, value, text))
        }
        return fragment;
    }

    function createOption(obj, value, text) {
        var option = document.createElement('option')

        option.textContent = obj[text].toString();

        option.value = obj[value].toString();

        return option;
    }

    function checkProperty(obj, value) {
        return obj.hasOwnProperty(value)
    }

    function getSelectedValue(obj) {
        if (obj.multiple) {
            return Array.prototype.reduce.call(obj.selectedOptions, function (acc, item) {
                acc.push(item.value);
                return acc;
            }, [])
        }
        return obj.options[obj.selectedIndex].value;
    }

    function getSelectedText(obj) {
        if (obj.multiple) {
             return Array.prototype.reduce.call(obj.selectedOptions, function (acc, item) {
                acc.push(item.text);
                return acc;
            }, [])
        }
        return obj.options[obj.selectedIndex].text;
    }

    function getValue(obj) {
        return obj.value;
    }

    function getText(obj) {
        return obj.text;
    }

    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
} (this))
