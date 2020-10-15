var DOMParser = require('xmldom').DOMParser;
import store from './store'

const templateFilter = function (value) {
    let string = "<div>" + value + "</div>";
    string = string.replace(/(\r\n|\n|\r)/gm, "")
    string = string.replace(/\s/g, '');
    string = string.replace(/\[b-col=([^\s\]]+)\s*\]/g, '<div class="col-md-$1">')
    string = string.replace(/\[\/b-col\]/g, '</div>')
    let data = JSON.parse(mapDOM(string, true));
    return data.content;
}
const mapDOM = function (element, json) {
    var treeObject = {};

    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
            var parser = new DOMParser();
            docNode = parser.parseFromString(element, "text/xml");
        } else { // Microsoft strikes again
            var docNode = new ActiveXObject("Microsoft.XMLDOM");
            docNode.async = false;
            docNode.loadXML(element);
        }
        element = docNode.firstChild;
    }

    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length - 1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }
    treeHTML(element, treeObject);

    return (json) ? JSON.stringify(treeObject) : treeObject;
}
const component = function (value, index) {
    let string = value.replace(/\s/g, "");
    string = value.replace(/\[component=([^\s\]]+)\s*\]/g, "$1,");
    string = string.split(",");
    string.splice(-1, 1);
    string.forEach((element) => {
        store.commit('contentPush', { index, element })
    });
}
export { templateFilter, mapDOM, component };