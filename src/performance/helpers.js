import React from 'react';
import bowser from 'bowser';

import { METRICS_UUID } from '../constants';
import { Counter } from './Counter';


export const addMetrics = Component => (requestId, pageName) => {
    const counter = new Counter();

    let navigator = window.navigator;
    let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    counter.init(METRICS_UUID, requestId, pageName);

    const userInfo = bowser.parse(navigator.userAgent);

    counter.setAdditionalParams({
      os: `${userInfo.os.name}${userInfo.os.version ? ` ${userInfo.os.version}`: ''}`,
      browser: `${userInfo.browser.name} ${userInfo.browser.version}`,
      platform: userInfo.platform.type,
      language: navigator.language,
      connection: connection?.effectiveType
    });

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
        counter.send('FCP', entry.startTime);
      }
    }).observe({ type: 'paint', buffered: true });

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const delay = entry.processingStart - entry.startTime;
        counter.send('FID', delay);
      }
    }).observe({ type: 'first-input', buffered: true });

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        counter.send('LCP', entry.startTime);
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    counter.send('connect', performance.timing.connectEnd - performance.timing.connectStart);
    

    return <Component/>;
}