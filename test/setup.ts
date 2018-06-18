import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM, DOMWindow } from 'jsdom';

// I hate this shit!
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src: DOMWindow, target: any) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

Object.assign(global, { window, document: window.document });

copyProps(window, global);

Enzyme.configure({ adapter: new Adapter() });