Things did in Section 5: Lesson 3 (1/1)

- Added a Browser Router in index.js
- Route exact i.e path='/' path='/hats' and url='localhost:3000/hats' it will still display homepage component corresponding to '/' path if without exact
- React-router-demo application
- Prop tunneling/Prop drilling: Only our homepage component gets access to the {history} prop through the <Route> component although directory and menu-item are its children. Now, we need to pass the {history} as a prop to other nested components and so on. This is called prop tunneling/prop drilling which is a bad programming pattern.
- Use of Spread operator in directory.component.jsx
- For routing to any other place with history.push() we need to give it the whole URL as we also need to know where we are in the app to navigate to another place.
