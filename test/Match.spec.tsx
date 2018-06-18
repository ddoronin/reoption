import * as React from 'react';
import { Match } from '../src/Match';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Option, some, none } from 'monas';

describe('<Match />', () => {
    it('should match some', () => {
        const option: Option<number> = some(42);
        const wrapper = mount(
            <Match 
                option={option}
                some={(num: number) => <p>{num}</p>}
            />
        );
        expect(wrapper.text()).to.contain(42);
    });

    it('should match none and render nothing', () => {
        const option: Option<number> = none;
        const wrapper = mount(
            <Match 
                option={option}
                some={(num: number) => <p>{num}</p>}
                none={<p>nothing</p>}
            />
        );
        expect(wrapper.text()).to.contain('nothing');
    });

    it('should match some as function', () => {
        let option: () => number;
        option = () => 42;
        const wrapper = mount(
            <Match 
                option={option}
                some={(num: number) => <p>{num}</p>}
            />
        );
        expect(wrapper.text()).to.contain(42);
    });

    it('should match none as function', () => {
        let option: () => number;
        option = () => null;
        const wrapper = mount(
            <Match 
                option={option}
                some={(num: number) => <p>{num}</p>}
                none={<p>none</p>}
            />
        );
        expect(wrapper.text()).to.contain('none');
    });
});
