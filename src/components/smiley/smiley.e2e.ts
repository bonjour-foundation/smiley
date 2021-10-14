import {newE2EPage} from '@stencil/core/testing';

describe('smiley', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley></bonjour-smiley>');
    const element = await page.find('bonjour-smiley');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a button', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley></bonjour-smiley>');
    const button = await page.find('bonjour-smiley >>> button');

    expect(button).not.toBe(null);
  });

  it('shows a question', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley></bonjour-smiley>');
    const label = await page.find('bonjour-smiley >>> label');

    expect(label).not.toBe(null);
    expect(label.innerText).toEqual('How do you feel today?');
  });

  it('shows a custom question', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley><span name="question">hello world</span></bonjour-smiley>');
    const label = await page.find('bonjour-smiley span');

    expect(label).not.toBe(null);
    expect(label.innerText).toEqual('hello world');
  });

  it('click to state super', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley></bonjour-smiley>');
    const button = await page.find('bonjour-smiley >>> button');

    expect(button).not.toBe(null);

    await button.click();

    const label = await page.find('bonjour-smiley >>> label');

    expect(label).not.toBe(null);
    expect(label.innerText).toEqual('super');
  });

  it('click to state okay', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley></bonjour-smiley>');
    const button = await page.find('bonjour-smiley >>> button');

    expect(button).not.toBe(null);

    await button.click();
    await button.click();
    await button.click();

    const label = await page.find('bonjour-smiley >>> label');

    expect(label).not.toBe(null);
    expect(label.innerText).toEqual('okay');
  });

  it('emit super', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley></bonjour-smiley>');

    const smileyState = await page.spyOnEvent('state');

    const button = await page.find('bonjour-smiley >>> button');

    expect(button).not.toBe(null);

    await button.click();

    await page.waitForTimeout(750);

    expect(smileyState).toHaveReceivedEventDetail('super');
  });

  it('emit okay', async () => {
    const page = await newE2EPage();

    await page.setContent('<bonjour-smiley></bonjour-smiley>');

    const smileyState = await page.spyOnEvent('state');

    const button = await page.find('bonjour-smiley >>> button');

    expect(button).not.toBe(null);

    await button.click();
    await button.click();
    await button.click();

    await page.waitForTimeout(750);

    expect(smileyState).toHaveReceivedEventDetail('okay');
  });
});
