/// <reference types = "vitest" />
import {defineConfig} from 'vite';
export default defineConfig({
  test: {
    reporters: [ 'json', 'tap', 'verbose'],
    outputFile: {
      json: './test/reports/report.json',
      verbose: './test/reports/verbose_report.json',
      tap: './test/reports/tap_report.json'
    }
  },
})