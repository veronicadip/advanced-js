// tagged templates (from template literals)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

function h1(strings, ...values) {
    // console.log(strings);
    // console.log(values);
    // console.log(arguments);
    let body = "";
    for (let i = 0; i < strings.length; i++) {
        body += strings[i] + (values[i] || "");
    }
    return `<h1>${body}</h1>`;
}

let myName = "veronica";
let place = "world";

console.log(h1`hello ${place} my name is ${myName}`);