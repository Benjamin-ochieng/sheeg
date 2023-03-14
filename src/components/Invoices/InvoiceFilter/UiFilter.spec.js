import { mount } from '@vue/test-utils';
import { afterEach, describe, it, expect } from 'vitest';
import UiFilter from './UiFilter.vue';

describe('FilterInvoice', () => {
  let wrapper;

  const filterOptions = ['All', 'Draft', 'Sent', 'Paid', 'Due'];

  const createComponent = () => {
    wrapper = mount(UiFilter, {
      props: { filterOptions, selectedFilterOption: '' },
      emits: ['filterInvoice'],
    });
  };

  const findFilterOptions = () =>
    wrapper.findAll('[data-testId = "filter-option"]');

  const findFilterOptionsLabels = () =>
    wrapper.findAllComponents('[data-testId = "filter-option-label"]');

  const findResetFilterOption = () =>
    wrapper.find('[data-testId = "reset-filters"]');

  afterEach(() => wrapper.unmount());

  it('renders a list of filter options', () => {
    createComponent();
    expect(
      filterOptions.every(
        (option, index) =>
          findFilterOptionsLabels()[index].props('label') === option,
      ),
    ).toBe(true);
  });

  it('Displays only the selected option when a selection is made', async () => {
    createComponent();
    const randomIndex = Math.floor(Math.random() * filterOptions.length);
    const randomFilterSelection = filterOptions[randomIndex];
    await wrapper.setProps({ selectedFilterOption: randomFilterSelection });
    filterOptions.map((option, index) =>
      index !== randomIndex
        ? expect(findFilterOptions()[index].classes('hidden')).toBe(true)
        : expect(findFilterOptions()[index].classes('hidden')).toBe(false),
    );
  });

  it('filter reset button is displayed only when a selection is made', () => {
    createComponent();
    expect(findResetFilterOption().classes('hidden')).toBe(true);
  });

  it('filter reset button is displayed only when a selection is made', async () => {
    createComponent();
    const randomIndex = Math.floor(Math.random() * filterOptions.length);
    const randomFilterSelection = filterOptions[randomIndex];
    await wrapper.setProps({ selectedFilterOption: randomFilterSelection });
    expect(findResetFilterOption().classes('hidden')).toBe(false);
  });
});

//  think of test below for Functional/intergration test

// it('user can make a selction from the list of filter options', async () => {
//   const selectiedFilter = findFilterOptions()[1];
//   await selectiedFilter.trigger('click');
//   expect(wrapper.emitted()).toHaveProperty('filterInvoice');
//   expect(wrapper.emitted('filterInvoice')[0][0]).toEqual('Draft');
// });
