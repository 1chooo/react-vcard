import React from 'react';

const GOOGLE_ANALYTICS_SITE_ID = 'UA-XXXXXXXXX';    // TODO: read from env or config

/**
 * Google Analytics component
 * @prop googleAnalyticsId - Google Analytics site ID
 * @returns Google Analytics script
 * @example 
 * <GoogleAnalytics googleAnalyticsId={GOOGLE_ANALYTICS_SITE_ID} />
 * @link https://github.com/vercel/next.js/tree/canary/packages/third-parties/src/google
 */

type GoogleAnalyticsProps = {
  googleAnalyticsId: string;
};

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({googleAnalyticsId}) => {

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_SITE_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
