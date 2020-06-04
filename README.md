Things done in Section 9: Lesson 11 (Session Management & Redux Perist)

- window.LocalStorage
- window.sessionStorage
- Redux Persist
  - persistor
    - export const persistor = persistStore(store); //persisted version of store
  - PeristGate
    - <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
