import React from 'react';

const PersonForm = ({ newName, setNewName, number, setNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:{' '}
        <input
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        number:{' '}
        <input
          type='text'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
