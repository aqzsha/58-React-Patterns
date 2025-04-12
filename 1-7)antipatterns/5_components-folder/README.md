# 📦 Components Folder (Anti-pattern)

Этот проект демонстрирует антипаттерн: **"components/" как свалка всех компонентов**.

## ❌ В чём проблема?

- Все компоненты лежат в одной папке `components/`
- Нет структуры: `UI`, `features`, `pages`, `widgets` и т.д.
- Трудно понять, что относится к чему
- Растёт папка — теряется модульность
- Повышается связанность кода

## 📂 Пример плохой структуры

components/ ├── Button.jsx ├── Modal.jsx ├── ProductCard.jsx ├── UserProfile.jsx ├── CartItem.jsx ├── Navbar.jsx ...

## ✅ Как лучше

### Вариант 1: по фичам (Feature-Based)

src/ ├── features/ │ ├── cart/ │ │ ├── CartItem.jsx │ │ └── cartSlice.js │ ├── product/ │ │ ├── ProductCard.jsx │ │ └── productAPI.js

### Вариант 2: по типу

src/ ├── ui/ │ ├── Button.jsx │ ├── Modal.jsx ├── layout/ │ ├── Header.jsx │ ├── Footer.jsx ├── pages/ │ ├── HomePage.jsx │ └── ProductPage.jsx

## 🧠 Принцип

> “Flat is better than nested, but structure is better than chaos.”

### Компоненты ≠ беспорядок.

Имей ясные границы между "что переиспользуемое", "что часть логики", и "что часть страницы".
