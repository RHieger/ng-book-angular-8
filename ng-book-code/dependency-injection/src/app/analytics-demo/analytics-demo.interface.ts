/**
 * Defines a simple Metric
 **/
export interface Metric {
  eventName: string;
  scope: string;
}

/**
 * Defines what an implementation for recording analytics would be
 **/
 export interface AnalyticsImplementation {
   recordEvent(metric: Metric): void;
 }
