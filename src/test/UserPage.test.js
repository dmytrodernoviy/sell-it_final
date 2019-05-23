import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserPage from '../components/UserPage';
import configureStore from 'redux-mock-store'
import { StaticRouter } from 'react-router'

Enzyme.configure({ adapter: new Adapter() });

describe('UserPage', () => {
    const initialState = {
        authorized: {
            userData: {
                username: "metal_master",
                email: "metalmaster@gmail.com",
                first_name: "",
                last_name: "",
                location: "",
                color_scheme: "",
                language: ""
            }
        }
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    let Component;

    beforeEach(() => {
        Component = mount(
            <StaticRouter location="someLocation" context={{}}>
                <UserPage store={store}/>
            </StaticRouter>);
        })

    it("UserPage initial", () => {
        expect(Component.find('span')).toHaveLength(7)
        expect(Component.find('div')).toHaveLength(3)
        expect(Component.find('Link')).toHaveLength(1)
        expect(Component.find('button')).toHaveLength(1)
    })

    it("UserPage check values", () => {
        expect(Component.find('span').first().text()).toEqual('UserName: metal_master')
        expect(Component.find('span').at(1).text()).toEqual('Email: metalmaster@gmail.com')
        expect(Component.find('Link').prop('to')).toEqual('/')
        expect(Component.find('Button').prop('title')).toEqual('Return')
        expect(Component).toMatchSnapshot()
    })
  })