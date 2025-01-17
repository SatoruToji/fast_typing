import { useState } from "react";

export function Input() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("я сьел собаку");
    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="idi nahuy"
        value={inputValue}
        onChange={handleChange}
        style={{ zIndex: 1 }}
      />
      <span className="absolute left-10  text-4xl">idi nahuy</span>
    </form>
  );
}
