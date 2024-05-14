const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return parts.map((part) => <Part part={part} key={part.id} />);
};

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} <span>{part.exercises}</span>
      </p>
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  return <h3>total of {total} exercises</h3>;
};

export default Course;
