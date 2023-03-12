const Pet = ({ name, animal, breed, id }) => {
  return React.createElement('div', { key: id }, [
    React.createElement('h2', { key: name }, name),
    React.createElement('h3', { key: animal }, animal),
    React.createElement('h3', { key: breed }, breed),
  ]
  )
}

const App = () => {
  return React.createElement(
    "div",
    {}, [
    React.createElement("h1", { key: 'fdasfaf' }, 'Adopt me'),
    React.createElement(Pet, { name: 'Arden', animal: 'dog', breed: 'sheep-dog', id: 'fda' }),
    React.createElement(Pet, { name: 'Murzik', animal: 'cat', breed: 'maine-coon', id: 'fads' })
  ]
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
