import { shallowMount } from '@vue/test-utils'
import VBlockly from '@/VBlockly'
const jsdom = require('jsdom')
const { JSDOM } = jsdom
global.dom = new JSDOM('<!doctype html><html><body></body></html>')
global.window = global.dom.window

// describe('VBlockly.vue', () => {
//   it('renders', () => {
//     const wrapper = shallowMount(VBlockly, {
//       propsData: { }
//     })
//     expect(wrapper.text()).toExist()
//   })
// })
