import { useState } from "react";

// let age = 0;  // useStateで初期化するので、この初期化は不要です。

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0); // 0 is the initial value of age

  console.log("rendering!");
  // 最初の実行する時にrenderingされて、何かの関数が実行されると、
  // 再レンダリングされるので、console.log("rendering!")が再度実行されます。
  // 下のhandleClick関数が実行されると、再レンダリングされるので、
  // console.log("rendering!")が再度実行されて、2回実行される。

  const handleClick = () => {
    setAge(age + 1); // この内部でageを更新されない。Reactが再レンダリングして、変数の値も更新される。

    // 更新用 関数を使うと、前の状態を引数として受け取り、新しい状態を返すことができます。
    // これにより、複数回の更新が正しく行われます。
    // setAge((state) => state + 1); // setAge( (0) => 0 + 1 )
    // setAge((state) => state + 1); // setAge( (1) => 1 + 1 )
    // setAge((state) => state + 1); // setAge( (2) => 2 + 1 )
    setAge((prevAge) => prevAge + 1); // setAge( (0) => 0 + 1 )
    console.log(age); // 0 更新用 関数ではないので、handleClickロジック内でのageの値は更新されません。
    setAge((prevAge) => prevAge + 1); // setAge( (1) => 1 + 1 )
    console.log(age); // 0 更新用 関数ではないので、handleClickロジック内でのageの値は更新されません。
    setAge((prevAge) => prevAge + 1); // setAge( (2) => 2 + 1 )
    console.log(age); // 0 更新用 関数ではないので、handleClickロジック内でのageの値は更新されません。
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
