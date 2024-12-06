'use client'

import { useReportWebVitals } from 'next/web-vitals'

// https://github.com/madewithnovel/next.js/blob/80185c2dea73ed8a70fe03b75b43e950af3ef7a6/app/vitals.tsx


export function WebVitals() {
  const GA_ID = 'G-JGG75799PJ';
  
  useReportWebVitals((metric) => {
    const metricValue = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);

    if (GA_ID && window.gtag) {
      window.gtag('event', metric.name, {
        value: metricValue,
        event_label: metric.id,
        non_interaction: true,
      });
      console.log(`[GA4] Sent metric: ${metric.name}, value: ${metricValue}, id: ${metric.id}`);
    } else {
      console.warn('[GA4] gtag is not available or GA_ID is missing');
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'web-vitals',
        metric_name: metric.name,
        metric_value: metricValue,
        metric_id: metric.id,
      });
      console.log(`[GTM] Sent metric: ${metric.name}, value: ${metricValue}, id: ${metric.id}`);
    } else {
      console.warn('[GTM] dataLayer is not available');
    }

    switch (metric.name) {
      case 'FCP': {
        console.log('FCP', metric.value)
        break
      }
      case 'LCP': {
        console.log('LCP', metric.value)
        break
      }
      // Add other cases as needed
    }
  })

  return null
}
