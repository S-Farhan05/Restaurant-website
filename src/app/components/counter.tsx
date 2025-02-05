import { useState } from 'react';

function QuantityCounter() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    if (count < 10) setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-3 items-center border-2 border-[#828282] md:w-28 w-14 xl:h-[50px] h-[42px] mx-auto">
        <button
          className="text-[#828282] text-[28px] cursor-pointer disabled:opacity-45 hover:bg-gray-400 h-full"
          onClick={decreaseCount}
          disabled={count === 1}
        >
          -
        </button>
        <div className="flex items-center justify-center border-x-2 border-[#828282] lg:text-[28px] text-[18px] h-full">
          {count}
        </div>
        <button
          className="text-[#828282] text-[28px] cursor-pointer disabled:opacity-45 hover:bg-gray-400 h-full"
          onClick={increaseCount}
          disabled={count === 10}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCounter;