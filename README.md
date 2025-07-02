# QlikSense Date Picker Extension

This repository contains a boilerplate Qlik Sense extension that demonstrates how to use React with a date picker component.

## Structure

```
react-date-picker-ext/
  ├── react-date-picker-ext.qext   - Extension metadata
  └── ReactDatePicker.js           - Main extension script
```

## Usage

1. Copy the `react-date-picker-ext` folder to your Qlik Sense extensions directory.
2. Add the extension to a sheet. When loaded, it fetches React, ReactDOM and `react-datepicker` from a CDN and renders a simple date picker.

No build step is required; the extension loads dependencies directly from the web.
