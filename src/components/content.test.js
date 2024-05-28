import {descipe , it , expect} from 'vitest'
import { mount } from '@vue/test-utils'
import content from './content.vue'

descipe('content test' , ()=>{
    it('should render' , ()=>{
        const wrapper = mount(content);
        expect(wrapper.find('h1').exists()).toBeTruthy();
    })
})