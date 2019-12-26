import { Injectable } from '@angular/core';
import {
  Metric,
  AnalyticsImplementation
} from '../analytics-demo/analytics-demo.interface';

@Injectable()
export class AnalyticsService {
  constructor(private implementation: AnalyticsImplementation) {
  }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}
