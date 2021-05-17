const { ESLint } = require('eslint');
const config = require('./index.js');

describe('eslint-config-translated', () => {
  test('loads config correctly', async () => {
    const eslint = new ESLint({
      overrideConfig: config
    });
    const code = `const foo = "bar";`;
    const [result] = await eslint.lintText(code);
    const rules = result.messages.map(m => m.ruleId);
    expect(rules.includes('no-unused-vars')).toBeTruthy();
    expect(rules.includes('prettier/prettier')).toBeTruthy();
  })
})