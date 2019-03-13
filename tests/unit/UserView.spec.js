import { shallowMount } from "@vue/test-utils";
import UserView from '@/views/UserView';

describe('UserView', () => {
    it('renders the component', () => {
        // arrange
        // renderiza apenas o primeiro nivel de dependencias do componente.
        const wrapper = shallowMount(UserView);

        // assert
        expect(wrapper.html()).toMatchSnapshot();
    });
});