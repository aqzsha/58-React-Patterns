# ⚙️ Low-Level Code in React (Anti-pattern)

Этот проект демонстрирует антипаттерн — использование низкоуровневого кода в React, что нарушает декларативный стиль и может вызывать ошибки.

---

## ❌ Проблема

- Используется манипуляция DOM напрямую (`document.querySelector`, `setAttribute`, `innerHTML`)
- Это ломает концепцию виртуального DOM
- React не "знает" о таких изменениях, и это может привести к багам

---

## 📄 Пример

```jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  useEffect(() => {
    const box = document.querySelector('#box');
    box.innerHTML = '<strong>Modified!</strong>';
    box.setAttribute('style', 'background: yellow; padding: 10px');
  }, []);

  return (
    <div>
      <h1>Low-Level DOM Manipulation</h1>
      <div id="box">Original Content</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

---

## ⚠ Почему это плохо

- React может перезаписать DOM при следующем рендере
- Не работает с React-реактивностью
- Трудно отлаживать и поддерживать
- Потенциальные баги и утечки памяти

---

## ✅ Как правильно

```jsx
const App = () => {
  return (
    <div>
      <h1>Declarative Example</h1>
      <div style={{ background: 'yellow', padding: '10px' }}>
        <strong>Modified!</strong>
      </div>
    </div>
  );
};
```

- Без `useEffect`
- Без `querySelector`
- Всё управляется через JSX и состояние

---

## 📌 Запомни

> В React ты описываешь **что** должно быть, а не **как** это делается на уровне DOM.
