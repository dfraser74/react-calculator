import del from '../src/scripts/reducers/del';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Del reducer tests', () => {

  let data = {};

  beforeEach(function () {
    data = { ...dataFixture };
  });

  it('should delete char', () => {
    let state = '20,12';
    let value = '';
    let action = createAction(constants.DEL, { value, data });
    let result = del(state, action);
    expect(result).toBe('20,1');

    result = del(result, action);
    expect(result).toBe('20,');

    result = del(result, action);
    expect(result).toBe('20');

    result = del(result, action);
    expect(result).toBe('2');

    result = del(result, action);
    expect(result).toBe('0');

    state = '-2';
    result = del(state, action);
    expect(result).toBe('0');
  });
});
