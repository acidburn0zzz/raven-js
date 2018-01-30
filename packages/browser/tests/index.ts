import 'mocha';
import {expect} from 'chai';
import * as sinon from 'sinon';

// import * as Sentry from '@sentry/core';
// import {SentryBrowser} from '../src/index';

describe('Test', () => {
  beforeEach(() => {
    // new Sentry.Client('__DSN__')
    //   .use(SentryBrowser)
    //   .install()
    //   .then(client => {
    //     client.setTagsContext({cordova: true});
    //     client.captureMessage('test message');
    //     client.captureBreadcrumb({message: 'HOHOHOHO'});
    //   });
  });
  it('works', () => {
    expect(2 + 2).to.be.equal(4);
  });
});
