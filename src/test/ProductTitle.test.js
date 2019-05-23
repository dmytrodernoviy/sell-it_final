import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductTitle from '../components/ProducListComponents/ProductTitle';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    id: 244,
    title: ""
}

describe ('ProductTitle', () => {
    it("ProductTitle initial", () => {
        const Component = shallow(<ProductTitle {...props}/>);
        expect(Component.find("span")).toHaveLength(1);
        expect(Component.find("img")).toHaveLength(1);
        expect(Component.find("Link")).toHaveLength(1);
    })
    
    it("ProductTitle change title property", () => {
        const changedProps = {
            ...props,
            title: "Продам апельсинку"
        }

        const Component = shallow(<ProductTitle {...changedProps} />)
        expect(Component.find("span").text()).toEqual("Продам апельсинку")
    })

    it("ProductTitle Link attribute 'to' ", () => {
        const Component = shallow(<ProductTitle {...props} />) 
        expect(Component.find("Link").prop("to")).toEqual('/product/244')
        expect(Component).toMatchSnapshot()
    })
});