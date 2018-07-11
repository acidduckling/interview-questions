let getPath = require('./get-path');

describe('getPath', () => {
  it('Should return Tim', () => {
    const path = ['pet', 'kid', 'owner', 'name'];

    const data = {
      name: 'Mary',
      pet: {
        name: 'Ringo',
        kid: {
          name: 'Tia',
          owner: {
            name: 'Tim'
          }
        }
      }
    };

    expect(getPath(path, data)).toEqual('Tim');
  });

  it('Should return undefined', () => {
    const path = ['pet', 'kid', 'owner', 'name'];

    const data = {
      name: 'Mary',
      pet: {
        name: 'Ringo',
        kid: {
          name: 'Tia'
        }
      }
    };

    expect(getPath(path, data)).toBeUndefined();
  });

  it('Should return Mary', () => {
    const path = ['name'];

    const data = {
      name: 'Mary',
      pet: {
        name: 'Ringo',
        kid: {
          name: 'Tia'
        }
      }
    };

    expect(getPath(path, data)).toEqual('Mary');
  });
});
