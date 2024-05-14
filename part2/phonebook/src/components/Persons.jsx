import React from 'react';

const Persons = ({ persons, search, deletePerson }) => {
  // rendering of persons functionality

  return (
    <div>
      {' '}
      {search
        ? persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
              <div key={person.name}>
                <span>{person.name}</span> <span>{person.number}</span>
                <button onClick={() => deletePerson(person)}>delete</button>
              </div>
            ))
        : persons.map((person) => (
            <div key={person.name}>
              <span>{person.name}</span> <span>{person.number}</span>
              <button onClick={() => deletePerson(person)}>delete</button>
            </div>
          ))}
    </div>
  );
};

export default Persons;
