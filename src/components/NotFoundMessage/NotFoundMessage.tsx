import css from "./NotFoundMessage.module.css";

type NotFoundMessageProps = {
  text: string;
};

const NotFoundMessage = ({ text }: NotFoundMessageProps) => {
  return <div className={css.message}>{text}</div>;
};

export default NotFoundMessage;
