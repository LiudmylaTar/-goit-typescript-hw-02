import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  changePage: () => void;
};
const LoadMoreBtn = ({ changePage }: LoadMoreBtnProps) => {
  return (
    <>
      <button className={css.button} onClick={changePage}>
        Load more
      </button>
    </>
  );
};
export default LoadMoreBtn;
