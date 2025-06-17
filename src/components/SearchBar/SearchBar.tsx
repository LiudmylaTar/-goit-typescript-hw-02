import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FormEvent } from "react";

const notify = () => toast("Please enter what you are looking for!");
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;

    const inputValue = input.value;
    if (inputValue.trim() === "") {
      notify();
      return;
    }
    onSubmit(inputValue);
    form.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
