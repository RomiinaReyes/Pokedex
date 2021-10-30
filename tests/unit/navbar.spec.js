import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue, {BNavbar} from 'bootstrap-vue'
import Navbar from '@/components/Navbar.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Tests de formulario', () => {
    const wrapper = mount(Navbar, {
        localVue,
        computed:{
            arrayRutas: () => {
                return []
            }
      
        }
    
    })
    it('esta home en navbar', () => {
        expect(wrapper.find(".home").exists()).toBe(true)
    })
    it('esta el logo en navbar', () => {
        expect(wrapper.find(".imagen").exists()).toBe(true)
    })
    
})