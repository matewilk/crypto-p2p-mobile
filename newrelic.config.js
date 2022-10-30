import NewRelic from 'newrelic-react-native-agent';
import {version} from './package.json';
import {Platform} from 'react-native';

let appToken;

if (Platform.OS === 'ios') {
  appToken = '{{ NR APP KEY HERE / iOS }}';
} else {
  appToken = '{{ NR APP KEY HERE / Android }}';
}

const agentConfiguration = {
  //Android Specific
  // Optional:Enable or disable collection of event data.
  analyticsEventEnabled: true,

  // Optional:Enable or disable crash reporting.
  crashReportingEnabled: true,

  // Optional:Enable or disable interaction tracing. Trace instrumentation still occurs, but no traces are harvested. This will disable default and custom interactions.
  interactionTracingEnabled: true,

  // Optional:Enable or disable reporting successful HTTP requests to the MobileRequest event type.
  networkRequestEnabled: true,

  // Optional:Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
  networkErrorRequestEnabled: true,

  // Optional:Enable or disable capture of HTTP response bodies for HTTP error traces, and MobileRequestError events.
  httpRequestBodyCaptureEnabled: true,

  //Android Specific
  // Optional: Enable or disable agent logging.
  loggingEnabled: true,

  //iOS Specific
  // Optional:Enable/Disable automatic instrumentation of WebViews
  webViewInstrumentation: true,
};

NewRelic.startAgent(appToken, agentConfiguration);
NewRelic.setJSAppVersion(version);
