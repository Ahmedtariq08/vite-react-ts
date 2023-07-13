import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  showLoader: boolean;
  text?: string;
};

function Loader({ showLoader, text }: Props) {
  return (
    showLoader && (
      <div className="loader-container">
        <CircularProgress color="primary" size={27} />
        {text && <div className="loader-text-container">{text}</div>}
      </div>
    )
  );
}

export default Loader;
