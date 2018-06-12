import React from 'react';
import { Match } from '../src/Match';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Option, some } from 'monas';
 
describe('<Match />', () => {
    it('should match snapshot', () => {
        const data: Option<number> = some(42);
        const wrapper = mount(
            <Match 
                data={data}
                some={(num: number) => <p>{num}</p>}
            />
        );
        expect(wrapper).to.matchSnapshot();
    });
});