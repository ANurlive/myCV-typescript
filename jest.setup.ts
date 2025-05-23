import "@testing-library/jest-dom";

//est не знает, что такое IntersectionObserver,
// потому что это браузерная фича. Мы "заменяем" её простой заглушкой, чтобы тесты не падали.
class IntersectionObserverMock {
  constructor(callback: any, options?: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
