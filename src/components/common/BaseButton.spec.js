import { mount } from '@vue/test-utils';
import { afterEach, describe, it, expect } from 'vitest';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  let wrapper;

  const createComponent = (configs) => {
    wrapper = mount(BaseButton, {
      props: {
        label: 'button',
        buttonType: 'text',
        icon: 'icon',
        action: 'search',
        ...configs,
      },
    });
  };

  const findButton = () => wrapper.find('[data-testId="base-button"]');
  const findButtonLabels = () =>
    wrapper.findAll('[data-testId="base-button-label"]');
  const findIconCopmonent = () =>
    wrapper.findComponent('[data-testId="base-button-label"]');

  afterEach(() => wrapper.unmount());

  it('renders a button', () => {
    createComponent();
    expect(findButton().exists()).toBe(true);
  });
  it('can render a button with a text label only', () => {
    createComponent();
    expect(findButtonLabels()).toHaveLength(1);
    expect(findButton().text()).toBe('button');
  });
  it('can render a button with a icon label only', () => {
    createComponent({ buttonType: 'icon' });
    expect(findButtonLabels()).toHaveLength(1);
    expect(findIconCopmonent().props('iconId')).toBe('icon');
  });

  it('can render a button with both an icon  and text label ', () => {
    createComponent({ buttonType: 'icon-text', icon: 'search' });
    expect(findButtonLabels()).toHaveLength(2);
    expect(findIconCopmonent().props('iconId')).toBe('search');
    expect(findButtonLabels()[1].text()).toBe('button');
  });
  it('The button is clickable with an action if not disabled', async () => {
    createComponent({
      buttonType: 'icon-text',
      icon: 'search',
    });
    await findButton().trigger('click');
    expect(wrapper.emitted()).toHaveProperty('search');
  });
});
