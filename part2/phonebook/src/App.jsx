import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personServices from './services/persons';
import Notification from './components/Notification';
import Footer from './components/Footer';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');
  const [erroMessage, setErrorMessage] = useState(null);

  // initializing persons
  useEffect(() => {
    personServices.getAllPersons().then((initializePersons) => {
      setPersons(initializePersons);
    });
  }, []);

  // adding of a person handler

  const addPerson = (e) => {
    e.preventDefault();

    const findPerson = persons.find(
      (person) => person.name.toLowerCase() == newName.toLowerCase()
    );

    if (findPerson && findPerson.number === number) {
      alert(`${findPerson.name} is already added to phonebook`);
      setNewName('');
      setNumber('');
      return;
    } else if (findPerson && findPerson.number !== number) {
      confirm(
        `${newName} is already added to phonebook, replace the old number with a new one ?`
      );

      const updateObject = {
        ...findPerson,
        number: number,
      };
      personServices
        .updatePerson(updateObject)
        .then((returnedPerson) => {
          setPersons((prev) =>
            prev.map((person) =>
              person.name === returnedPerson.name ? returnedPerson : person
            )
          );
        })
        .catch((error) => {
          setErrorMessage(
            ` Information of ${findPerson.name} has already been remove the server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        });
      setNewName('');
      setNumber('');
      return;
    }
    const personObject = {
      name: newName,
      number: number,
    };

    personServices.createPerson(personObject).then((returnPerson) => {
      setPersons(persons.concat(returnPerson));
      setErrorMessage(`${returnPerson.name} added`);

      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    });

    setNewName('');
    setNumber('');
  };

  // deleting of person functionality
  const deletePerson = (personObj) => {
    confirm(`delete ${personObj.name} ?`);
    personServices.deletePerson(personObj);
    setPersons((prev) => prev.filter((person) => person.id !== personObj.id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={erroMessage} />

      <Filter search={search} setSearch={setSearch} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        setNewName={setNewName}
        number={number}
        setNumber={setNumber}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons search={search} persons={persons} deletePerson={deletePerson} />
      <Footer />
    </div>
  );
};

export default App;
