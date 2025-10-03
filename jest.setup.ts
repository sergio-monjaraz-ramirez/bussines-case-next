class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Only define the mock in the test environment
if (typeof global.ResizeObserver === "undefined") {
  (global as typeof globalThis).ResizeObserver = MockResizeObserver;
}