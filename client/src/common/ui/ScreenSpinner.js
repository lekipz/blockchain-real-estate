import Loader from 'react-loader-spinner';

export default function ScreenSpinner({ label }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Loader visible type="Oval" color="#66C"/>
        <span className="pt-2">{label ?? 'Chargement...'}</span>
      </div>
    </div>
  );
}
