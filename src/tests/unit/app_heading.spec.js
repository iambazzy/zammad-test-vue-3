const { shallowMount } = require('@vue/test-utils');
import AppHeading from '../../components/Base/AppHeading.vue';

describe('Testing Component props', () => {
  const wrapper = shallowMount(AppHeading, {
    propsData: {
      title: "The Breaking Bad",
      count: 50 
    }
  });

  it('Checks title', () => {
    expect(wrapper.props().title).toBe('The Breaking Bad');
  })

  it(`Checks Count Passed and it's data type`, () => {
    expect(typeof wrapper.props().count).toBe('number');
  })
})