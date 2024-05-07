const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return <p>{part.name}</p>;
};

const Total = ({ parts }) => {
  console.log(parts);
  return (
    <p>
      The total number of exercises is:{' '}
      {parts
        .map((part) => part.exercises)
        .reduce((prev, curr) => {
          return prev + curr;
        }, 0)}
    </p>
  );
};

export default App;
