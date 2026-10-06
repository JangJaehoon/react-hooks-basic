import { useState } from "react";

// let age = 0;  // useStateで初期化するので、この初期化は不要です。

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0); // 0 is the initial value of age

  const handleClick = () => {
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
    console.log(age);
  };
  return (
    <div>
      <input type="text" />
      <button
        onClick={handleClick}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age
      </button>
      <p>You are {age} years old.</p>
    </div>
  );
};

export default Lesson1_1;
